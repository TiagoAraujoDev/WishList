export const apiFetch = async (
  url: string = "",
  options: any = null,
  errorMsg: string | null = null
) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw Error("Reload the application!");
    }

    return response;
  } catch (err: any) {
    errorMsg = err.message;
  } finally {
    console.log(errorMsg);
  }
};
