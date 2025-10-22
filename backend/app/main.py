from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi import FastAPI, File, UploadFile
from app.api.endpoints import upload, query
from fastapi.middleware.cors import CORSMiddleware

#backend .\venv\Scripts\Activate  python -m uvicorn app.main:app --reload
#frontend npm start
load_dotenv()

app = FastAPI(
    title="RAG Chatbot Backend",
    description="FastAPI sunucusunun temel yapısı."
)
origins = [
    "http://localhost:5173",
    "https://68f8de650b0df96006b1dd8f--bespoke-pavlova-a1e252.netlify.app/",
]
app.include_router(upload.router)
app.include_router(query.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# http://localhost:8080/
@app.get("/")
def read_root():
    return {"message": "FastAPI Backend Sunucusu başarıyla çalışıyor."}
@app.post("/postOneTry")
def postOneTry():
    return {"message":"postOneTry çalıştı"}

@app.post("/upload/document")
def uploaddocument(file: UploadFile = File(...)):
    print(
        "message:"+ "uploaddocument çalıştı \n"+
        "filename:"+ file.filename +"\n"+
        "content_type:"+ file.content_type
    );
    return {
        "message": "uploaddocument çalıştı ",
        "filename ": file.filename ,
        "content_type ": file.content_type
        };
    



