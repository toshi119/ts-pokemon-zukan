export const getPokemon = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`正しくレスポンスが返ってきませんでした, ${res.status}`);
    }
    const data = await res.json();
    return data
  } catch (error) {
    console.error('データの取得に失敗しました', error);
    throw error;
  }
};
