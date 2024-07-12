class ChatReadRetrive:
    def __init__(self,ai_model_name, client):
        self.ai_model_name = ai_model_name
        self.client=client

    def run(self, prompt: str, question: str) -> any:

        data = [
            ["Name", "Age", "City"],
            ["Alice", 30, "New York"],
            ["Bob", 25, "Los Angeles"],
            ["Charlie", 35, "Chicago"]
        ]

        prompt = prompt.format(query=question, sources=data)
        completion = self.client.chat.completions.create(
        model=self.ai_model_name,
        
        messages=[
        {
            "role": "system",
            "content": prompt
        },
        {
            "role": "user",
            "content": question,
        }
        ],
        temperature=1,
        max_tokens=1024,
        top_p=1,
        stream=True,
        stop=None,
        )

        ans=''
        for chunk in completion:
            ans += str(chunk.choices[0].delta.content)
        ans = ans[:-4]


        return ({"question": question, "answer": ans})