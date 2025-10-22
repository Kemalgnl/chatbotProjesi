from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
import shutil
import os
from pathlib import Path
from app.services.rag_service import initialize_vector_store

router = APIRouter(tags=["Yükleme"])

UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "uploaded_files")
os.makedirs(UPLOAD_DIR, exist_ok=True) 
@router.post("/upload/document")
async def upload_document(file: UploadFile = File(...)):
    if not file.filename or not file.filename.lower().endswith('.pdf'):
        raise HTTPException(status_code=400, detail="Sadece geçerli PDF dosyaları yüklenebilir.")
    print("çalıştı22");
    file_location = Path(UPLOAD_DIR) / file.filename
    print("çalıştı3");
    try:
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        rag_result = initialize_vector_store(str(file_location))

        if "ERROR" in rag_result:
            os.remove(file_location) 
            raise HTTPException(status_code=500, detail=f"RAG işleme hatası: {rag_result}")
        
        return JSONResponse(content={
            "filename": file.filename,
            "message": "Belge başarıyla yüklendi ",
            "rag_status": rag_result
        })

    except Exception as e:
        print(f"Sunucu İç Hatası (Upload): {e}")
        raise HTTPException(status_code=500, detail="Belge yüklenirken veya işlenirken beklenmedik bir hata oluştu.")
    finally:
        pass