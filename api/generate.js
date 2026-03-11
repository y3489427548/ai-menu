export default async function handler(req,res){

const {dish}=req.query

const prompt=`
High-end Chinese food photography

Dish: ${dish}

Black background

Exploded ingredient layout

Ingredients floating vertically in layers

Top layer: dried chili peppers

Second layer: garlic slices

Third layer: ginger slices

Fourth layer: main ingredient of ${dish}

Fifth layer: sauce

Bottom layer: finished dish ${dish} in bowl

ultra realistic
8k food photography
`

const response = await fetch("https://api.openai.com/v1/images/generations",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":`Bearer ${process.env.OPENAI_API_KEY}`
},
body:JSON.stringify({
model:"gpt-image-1",
prompt:prompt,
size:"1024x1024"
})
})

const data = await response.json()

res.status(200).json({
image:data.data[0].url
})

}
