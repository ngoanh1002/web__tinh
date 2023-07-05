export async function render() {
    let template = document.createElement('div');
    template.classList.add('about-page');
    template.innerHTML = 'about-page';

    return template;
}