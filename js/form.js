function print_result() {

    formInfo = document.f1
    let Iname = formInfo.Iname.value;

    let Gname = formInfo.Gname.value;

    let url = formInfo.url.value;

    let gender;
    if(formInfo.gender[0].checked) {
      gender = formInfo.gender[0].value;
    } else {
      gender = formInfo.gender[1].value;
    }
    let aok = "";
    let aok_length = formInfo.aok.length;
    for(let i = 0; i < aok_length; i++) {
      if(formInfo.aok[i].checked) {
        aok += formInfo.aok[i].value + " ";
      }
    }
    let range = formInfo.range.value;
    let index = formInfo.type.selectedIndex;
    let type = formInfo.type.options[index].text;

    alert("Idol Name is " + Iname + "\nGroup Name is " + Gname + 
    "\nMV Link is " + url + "\nYour gender is " + gender + 
    "\nAspects of K-pop is " + aok + "\nFavorite Music Type is " + 
    type + "\nRating of Our Website is " + range);
}