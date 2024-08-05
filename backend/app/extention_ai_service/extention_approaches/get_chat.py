from langchain_community.document_loaders import AsyncChromiumLoader
from langchain_community.document_transformers import BeautifulSoupTransformer
from langchain_community.document_loaders import AsyncHtmlLoader
from langchain_community.document_transformers import Html2TextTransformer

class GetChat:
    def __init__(self, chat_model, ai_services):
        self.chat_model=chat_model
        self.ai_services=ai_services


    async def run(self,question:str,prompt:str,url_location:str):
        loader = AsyncHtmlLoader([url_location])

        docs = loader.load()
        html = Html2TextTransformer()
        docs_transformed = html.transform_documents(docs)
        print(docs_transformed[0].page_content)           #page Content
        
        data = docs_transformed[0].page_content

        prompt = prompt.format(query=question, content=data)
        completion = self.ai_services.chat.completions.create(
        model=self.chat_model,
        
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
        
        
        
        
        return ({"question" : question, "answer": ans})