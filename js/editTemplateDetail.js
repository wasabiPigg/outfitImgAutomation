function openEditDetail(n) {

    // テンプレ内の詳細変更
    switch (n) {
        case 0:
            // フツーのテンプレ
            editOriginalTemplate();
            break;
    
        case 1:
            // 黒猫さんのテンプレ
            editKuronekoTemplete();
        default:
            break;
    }
}

// フツーのテンプレ
function editOriginalTemplate() {
    // let elm = document.getElementById("templateBtn0");
    const editModal = new bootstrap.Modal(document.getElementById('originalTemplateEditModal'));
    editModal.show();
}

function originalEditDone() {
    const formElements = document.forms.originalEdit;
    const itemPosition = formElements.itemPosition.value;
    const itemShape = formElements.itemShape.value;
    console.log(itemPosition, itemShape)
}

// 黒猫さんのテンプレ
function editKuronekoTemplete() {
    const editModal = new bootstrap.Modal(document.getElementById('kuronekoTemplateEditModal'));
    editModal.show();
}

function kuronekoEditDone() {
    const formElements = document.forms.kuronekoEdit;
    const titleText = formElements.titleText.value;
    const leftText = formElements.leftText.value;
    const detailText = formElements.detailText.value;
    console.log(titleText,leftText,detailText)
}