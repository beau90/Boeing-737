function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.nextElementSibling.innerHTML;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}