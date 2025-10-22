# Chatbot Uygulaması (RAG + LLM)

## Projenin Amacı
Bu proje, bir şirket ortamında kullanılabilecek profesyonel bir chatbot geliştirmeyi amaçlamaktadır. Chatbot, yalnızca sağlanan belgelerden bilgi alarak cevap verir ve belgelerde yanıt bulunmadığında mantıklı tahminler yapar. Bu sayede kullanıcılar, şirket verilerine dayalı doğru ve güvenilir bilgiler alabilir.

## Veri Seti Hakkında Bilgi
- Kullanılan veriler, şirketin sağladığı doküman ve metin dosyalarından oluşmaktadır.
- Veri seti özel ve hassas bilgiler içerebileceği için repo’da paylaşılmamıştır.
- Kullanılan dokümanlar PDF, TXT ve DOCX formatında olabilir.
- Bu projede, bilgisayar mühendisliği öğrenimim sırasında kullandığım 1328 adet PDF dosyası, TXT formatına çevrilerek dataset olarak kullanılmıştır. Datasetin toplam boyutu 436.000 satırdır.
- 
## Kullanılan Yöntemler
- **Python**: Uygulamanın temel programlama dili.
- **FastAPI**: Backend API geliştirmek için.
- **WebSocket**: Gerçek zamanlı iletişim sağlamak için.
- **LangChain & RAG (Retrieval-Augmented Generation)**: Belgelerden bilgi çekip, LLM ile cevap üretmek için.
- **React.js**: Kullanıcı arayüzünü geliştirmek için.
- **Frontend-Backend Entegrasyonu**: WebSocket ile frontend ve backend gerçek zamanlı olarak iletişim kurar.

## Elde Edilen Sonuçlar
- Kullanıcıların sorularına, sadece sağlanan belgelerden bilgi alarak yanıt verebilen bir chatbot geliştirildi.
- Belgelerde yanıt bulunmadığında, chatbot mantıklı tahminlerde bulunabiliyor ve bu tahminlerin doğrulanmadığını belirtiyor.
- Frontend üzerinde soru-cevap geçmişi gösteriliyor ve gerçek zamanlı cevap alınıyor.

---

![proje](https://github.com/user-attachments/assets/2e4d79a1-103c-4048-91c9-c6d938a71cf9.gif)

---

## Kullanım

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/Kemalgnl/chatbotProjesi.git
cd chatbot-projesi
```

### 2. Backend Kurulumu
Gerekli Python paketlerini yükleyin:
```bash
pip install -r requirements.txt
```

### 3. Backend'i Başlatın
```bash
python -m uvicorn app.main:app --reload
```

### 4. Frontend Kurulumu ve Başlatma
Yeni bir terminal penceresi açın ve aşağıdaki komutları çalıştırın:
```bash
cd frontend
npm install
npm start
```

### 5. Uygulamayı Açın
Web tarayıcınızdan [http://localhost:5173](http://localhost:5173) adresine giderek chatbot'u kullanmaya başlayabilirsiniz.

---

## 📝 Notlar
- Projenizde kendi verilerinizi kullanmak için `data/` klasörüne belgelerinizi ekleyin.
- Backend ve frontend'in aynı anda çalışması gerekmektedir.
