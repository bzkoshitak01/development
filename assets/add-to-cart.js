function buttonClick(variantId){
    let formData = {
      items: [
        {
          id: variantId,
          quantity: 1,
        },
      ],
    };
  
    fetch("/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
        const addBtn = document.getElementById('bl_addBtn__'+variantId);
        const defaultText = addBtn.innerText;
        console.log(defaultText);
        addBtn.innerText = '';
        addBtn.innerHTML = '<div class="loader">Loading...</div>';
        //addBtn.createElement('i');
        //addBtn.firstChild.classList.add('fad', 'fa-spinner-third', 'fa-spin');
        // const addBtnModal =document.createElement('div');
        // addBtnModal.innerHTML = '商品がカートに追加されました。';
        
        setTimeout(function(){
            // addBtn.innerHTML = '<span>'+defaultText+'</span>';
            // addBtn.appendChild(addBtnModal);
            // addBtnModal.classList.add('bl_addBtn_modal');
            // addBtnModal.classList.add('bl_addBtn_modal__show');
            window.location.reload(false);
        },1000);
        setTimeout(function(){
            // addBtnModal.classList.remove('bl_addBtn_modal__show');
            // setTimeout(function(){
            //     addBtn.querySelector('.bl_addBtn_modal').remove();
            // },200);
        },2000);
    })
    .catch((error) => {
      console.error("Error:", error)
    })
  }
