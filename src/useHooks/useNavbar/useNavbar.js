export const darkModeHandler = (dark,setDark) => {
    setDark(!dark);
    document.body.classList.toggle("dark");
}