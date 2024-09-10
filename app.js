function insertImageBeforeParagraphs() {
    const img = document.createElement('img');
    img.src = 'assets/sample.jpg';

    img.width = 300;
    img.height = 250;

    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        const imgClone = img.cloneNode();
        paragraph.parentNode.insertBefore(imgClone, paragraph);
    });
}
insertImageBeforeParagraphs();