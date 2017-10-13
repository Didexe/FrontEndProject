export default function clearInputs() {
    document.querySelectorAll('input, textarea')
        .forEach((input) => {
            if (input.value !== '') {
                input.value = '';
            }
        });
}
