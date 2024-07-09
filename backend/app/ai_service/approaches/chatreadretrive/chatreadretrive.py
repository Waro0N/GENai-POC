class ChatReadRetrive:
    def __init__(self,ai_model_name, client):
        self.ai_model_name = ai_model_name
        self.client=client


    def run(self) -> any:
        completion = self.client.chat.completions.create(
        model=self.ai_model_name,
        messages=[
        {
            "role": "system",
            "content": "You are assistant who helps me."
        },
        {
            "role": "user",
            "content": "Hi",
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
            print(chunk)
            ans += str(chunk.choices[0].delta.content)


        return ({"answer": ans})