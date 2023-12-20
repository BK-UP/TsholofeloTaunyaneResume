function OpenResume(){
      if(window.screen.width<993){
            window.open("./media/alt/TT_CV.pdf");
            return;
      }
      let book = document.querySelector('.book');
      let bookPage_1 = document.querySelector('.page-1');
      let bookPage_1Back = bookPage_1.querySelector('.back');
      book.classList.add('bookTrans');
      bookPage_1.classList.add('pageTrans');
      bookPage_1Back.classList.add('backTrans');
}
function closeBook(){
      let book = document.querySelector('.book');
      let bookPage_1 = document.querySelector('.page-1');
      let bookPage_1Back = bookPage_1.querySelector('.back');
      book.classList.remove('bookTrans');
      bookPage_1.classList.remove('pageTrans');
      bookPage_1Back.classList.remove('backTrans');
}
let high = false;
let uni = false;
function showHigh(){
      let highDis = document.querySelector('.edu_1L');
      let varDis = document.querySelector('.edu_2L');
      if(high == false){
            highDis.style.display = "block";
            varDis.style.display = "none";
            high =true;
            uni = false;

      }            
      else{
            highDis.style.display = "none";
            high = false;
      }
}
function showUni(){
      let varDis = document.querySelector('.edu_2L');
      let highDis = document.querySelector('.edu_1L');

      if(uni == false){
            varDis.style.display = "block";
            highDis.style.display = "none";
            uni =true;
            high = false;
      }            
      else{
            varDis.style.display = "none";
            uni = false;
      }
}