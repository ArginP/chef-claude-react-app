import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
Вы — помощник, который получает список ингредиентов, имеющихся у пользователя, и предлагает рецепт, который он мог бы приготовить
с некоторыми или всеми этими ингредиентами. Вам не нужно использовать каждый ингредиент, который он упоминает в своем рецепте.
Рецепт может включать дополнительные ингредиенты, которые он не упомянул, но постарайтесь не включать слишком много дополнительных ингредиентов.
Отформатируйте свой ответ в формате markdown, чтобы его было легче отобразить на веб-странице. Напиши ответ на русском языке.
`

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `У меня есть ${ingredientsString}. Создай из них рецепт приготовления блюда.` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}