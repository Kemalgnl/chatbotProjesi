export async function askQuestion(question, file = null) {
  try {
    const formData = new FormData();
    formData.append("question", question);
    if (file) {
      formData.append("file", file);
    }

    const response = await fetch("http://127.0.0.1:8000/ask", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Sunucu hatası!");
    }

    const data = await response.json();
    return data;  
  } catch (error) {
    console.error("İstek hatası:", error);
    return { answer: "Bir hata oluştu, lütfen tekrar deneyin.", sources: [] };
  }
}
