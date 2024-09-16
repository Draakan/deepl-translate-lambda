exports.translate = async (event) => {
  try {
    const textToTranslate = JSON.parse(event.body).text;

    const result = await fetch(process.env.DEEPL_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: [textToTranslate],
        target_lang: process.env.TARGET_LANG,
        source_lang: process.env.SOURCE_LANG,
      }),
    });
  
    return await result.json()
  } catch (error) {
    throw new Error(error);
  }
};
