console.log(window.innerWidth)


if(window.innerWidth >=1024 && window.innerWidth <1500){
    window.onscroll = () =>{
        let scroll = window.scrollY;
        // console.log(scroll)
     
/////////////////////// about
        if(scroll<255){
            personal.style.animation = `none`;  
        }
        else{
            resize_about(personal,about,about_img,list_about);
        }
        // edu /////////////////////////////////
        if(scroll<1190){
            edu_title.style.animation = `none`;
        }
        else{
            resize_edu(edu_title,edu,edu_img,edu_item);
        }
        // skill//////////////////////////////////////
        if(scroll<2000){
            skill_img.style.animation = `none`;
        }
        else{
            resize_skill_1(skill_img,skill_title);
        }
        if(scroll>2280){
            resize_skill_2(skill_items,skill_pacent,hyaku);
        }
        //////////////// portfolio
        if(scroll<3060){
            title_name.style.animation = `none`;
        }
        else{
            resize_pofolio(title_name,port_img,port_title,port_items,'show_port');
        }
        // contact //////////
        if(scroll< 4000){
            resize_contact_0(contact,span_1,span_2)
        }else{
            resize_contact(contact,span_1,span_2,local_adress,local_contact);
        }
        /////// menu color change/////////////////////////////////////////////////
        tag_li.forEach(item => {
            const tag_icon = item.querySelector('a')
            if(tag_icon.classList.contains('add')){
                tag_icon.classList.remove('add');
            }
            if(scroll < 915){
                item.classList.contains('item_1') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll >= 915){
                item.classList.contains('item_2') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 1780){
                item.classList.contains('item_3') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 2520){
                item.classList.contains('item_4') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 3510){
                item.classList.contains('item_5') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 4510){
                item.classList.contains('item_6') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
        })
    }
}
////////////////// ipad //////////////////////////////////////////
if(window.innerWidth >=750 && window.innerWidth <=1023){
    window.onscroll = () =>{
        let scroll = window.scrollY;
        // console.log(scroll)
       

/////////////////////// about
        if(scroll<400){
            personal.style.animation = `none`;
        }
        else{
            resize_about(personal,about,about_img,list_about);
        }
        // edu /////////////////////////////////
        if(scroll<1000){
            edu_title.style.animation = `none`;
           
        }
        else{
            resize_edu(edu_title,edu,edu_img,edu_item);
        }
        // skill//////////////////////////////////////
        if(scroll<1023){
            skill_img.style.animation = `none`;
        }
       else{
            resize_skill_1(skill_img,skill_title);
        }
        if(scroll>1835){
            resize_skill_2(skill_items,skill_pacent,hyaku);
        }
        //////////////// portfolio
        if(scroll<2500){
            title_name.style.animation = `none`;
        }
        else{
            resize_pofolio(title_name,port_img,port_title,port_items,'span_title_1');
        }
        // contact //////////

        if(scroll< 3470){
            resize_contact_0(contact,span_1,span_2)
           
        }else{
            resize_contact(contact,span_1,span_2,local_adress,local_contact);
        }

        /////// menu color change/////////////////////////////////////////////////
        tag_li.forEach(item => {
            const tag_icon = item.querySelector('a')
            if(tag_icon.classList.contains('add')){
                tag_icon.classList.remove('add');
            }
            if(scroll < 706){
                item.classList.contains('item_1') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll >= 706){
                item.classList.contains('item_2') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 1250){
                item.classList.contains('item_3') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 1935){
                item.classList.contains('item_4') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 2856){
                item.classList.contains('item_5') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 3890){
                item.classList.contains('item_6') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
        })
    }
}

////////////////// phone //////////////////////////////////////////

if(window.innerWidth >=410 && window.innerWidth <=749){
    menu.forEach(item => {
        item.onmouseenter = (event)=>{
            const items_menu = event.target;
            const span_menu = items_menu.parentNode.querySelector('span')
            span_menu.style.transform = `translateY(${0})`
            span_menu.style.opacity = 1
        }
        item.onmouseleave = (e)=>{
            const items_menu = e.target;
            const span_menu = items_menu.parentNode.querySelector('span')
            span_menu.style.transform = `translateY(${0}px)`
            span_menu.style.opacity = 1
        }
    })
    window.onscroll = () =>{
        let scroll = window.scrollY;
        console.log(scroll)

/////////////////////// about
        
        about_title_phone.style.animation =  scroll < 131 ? `none` :  `work_img 1s ease-in-out 0.3s forwards`;
        about_img.style.animation =  scroll < 417 ? `none` : `personal 1s ease-in-out 0.6s forwards`;
        if(scroll > 805){
            for(let i = 0;i<list_about.length;i++){
                list_about[i].style.animation = `list_about 1.6s ease-in-out ${0.5*i}s forwards`;
            }
        }
        // edu /////////////////////////////////
        edu_title_phone.style.animation =  scroll < 1200 ? `none` :  `work_img 1s ease-in-out 0.3s forwards`;
        if(scroll > 1592){
            for(let i = 0;i<edu_item.length;i++){
                edu_item[i].style.animation = `list_about 1.6s ease-in-out ${0.5*i}s forwards`;
            }
        }
        // skill//////////////////////////////////////
        skill_title_phone.style.animation = scroll < 2030 ? `none` : `skill_title 1.2s ease-in-out 0.4s forwards`;
        if(scroll>2338){
            skill_pacent.forEach(item =>{
                item.style.animation = `skill_show 2s ease-in-out 0.5s forwards`;
            })
            skill_items.forEach(item =>{
                item.style.animation = `skill_title 0.8s ease-in-out 0.5s forwards`;
            })
            hyaku.style.animation  = `skill_title 0.8s ease-in-out 2s forwards`;
        }
        //////////////// portfolio
        title_name.style.animation = scroll <2763 ? `none`:` span_title_1 2s ease-in-out  forwards`;
        if(scroll>3054){
            for(let i = 0;i<port_items.length;i++){
                port_items[i].style.animation = `work_img 1.3s ease-in-out ${0.6*i}s forwards`;
            }
        }
        // contact //////////
        contact.style.animation = scroll < 3932 ? `none` : `span_title 1s ease-in-out 0.5s forwards`;
        span_1.style.animation = scroll < 3932 ? `none` : `span_title_1 0.7s ease-in-out 1.5s forwards`;
        span_2.style.animation = scroll < 3932 ? `none` : `span_title_2 0.7s ease-in-out 2.2s forwards`;
        local_adress.style.animation = scroll < 4079 ? `none` : `local_adress 1.5s ease-in-out 2.5s forwards`;
        local_contact.style.animation = scroll < 4150 ? `none` : `local_contact 2.5s ease-in-out 1.5s forwards`;

        /////// menu color change/////////////////////////////////////////////////
        tag_li.forEach(item => {
            const tag_icon = item.querySelector('a')
            if(tag_icon.classList.contains('add')){
                tag_icon.classList.remove('add');
            }
            if(scroll < 424){
                item.classList.contains('item_1') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll >= 424){
                item.classList.contains('item_2') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 1447){
                item.classList.contains('item_3') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 2324){
                item.classList.contains('item_4') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 3060){
                item.classList.contains('item_5') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 4080){
                item.classList.contains('item_6') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
        })
    }
}
////////////////// small phone //////////////////////////////////////////


if(window.innerWidth <410){
    menu.forEach(item => {
        item.onmouseenter = (event)=>{
            const items_menu = event.target;
            const span_menu = items_menu.parentNode.querySelector('span')
            span_menu.style.transform = `translateY(${0})`
            span_menu.style.opacity = 1
        }
        item.onmouseleave = (e)=>{
            const items_menu = e.target;
            const span_menu = items_menu.parentNode.querySelector('span')
            span_menu.style.transform = `translateY(${0}px)`
            span_menu.style.opacity = 1
        }
    })
    window.onscroll = () =>{
        let scroll = window.scrollY;
        console.log(scroll)

/////////////////////// about
        
        about_title_phone.style.animation =  scroll < 224 ? `none` :  `work_img 1s ease-in-out 0.3s forwards`;
        about_img.style.animation =  scroll < 498 ? `none` : `personal 1s ease-in-out 0.6s forwards`;
        if(scroll > 755){
            for(let i = 0;i<list_about.length;i++){
                list_about[i].style.animation = `list_about 1.6s ease-in-out ${0.5*i}s forwards`;
            }
        }
        // edu /////////////////////////////////
        edu_title_phone.style.animation =  scroll < 1065 ? `none` :  `work_img 1s ease-in-out 0.3s forwards`;
        if(scroll > 1325){
            for(let i = 0;i<edu_item.length;i++){
                edu_item[i].style.animation = `list_about 1.6s ease-in-out ${0.5*i}s forwards`;
            }
        }
        // skill//////////////////////////////////////
        skill_title_phone.style.animation = scroll < 1976 ? `none` : `skill_title 1.2s ease-in-out 0.4s forwards`;
        if(scroll>2095){
            skill_pacent.forEach(item =>{
                item.style.animation = `skill_show 2s ease-in-out 0.5s forwards`;
            })
            skill_items.forEach(item =>{
                item.style.animation = `skill_title 0.8s ease-in-out 0.5s forwards`;
            })
            hyaku.style.animation  = `skill_title 0.8s ease-in-out 2s forwards`;
        }
        //////////////// portfolio
        title_name.style.animation = scroll <2558 ? `none`:` span_title_1 2s ease-in-out  forwards`;
        if(scroll>2714){
            for(let i = 0;i<port_items.length;i++){
                port_items[i].style.animation = `work_img 1.3s ease-in-out ${0.6*i}s forwards`;
            }
        }
        // contact //////////
        contact.style.animation = scroll < 3690 ? `none` : `span_title 1s ease-in-out 0.5s forwards`;
        span_1.style.animation = scroll < 3690 ? `none` : `span_title_1 0.7s ease-in-out 0.8s forwards`;
        span_2.style.animation = scroll < 3690 ? `none` : `span_title_2 0.7s ease-in-out 1.5s forwards`;
        local_adress.style.animation = scroll < 3890 ? `none` : `local_adress 1.5s ease-in-out 1s forwards`;
        local_contact.style.animation = scroll < 3900 ? `none` : `local_adress 2.5s ease-in-out 1s forwards`;

        /////// menu color change/////////////////////////////////////////////////
        tag_li.forEach(item => {
            const tag_icon = item.querySelector('a')
            if(tag_icon.classList.contains('add')){
                tag_icon.classList.remove('add');
            }
            if(scroll < 370){
                item.classList.contains('item_1') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll >= 370){
                item.classList.contains('item_2') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 1387){
                item.classList.contains('item_3') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 2314){
                item.classList.contains('item_4') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 3260){
                item.classList.contains('item_5') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 4180){
                item.classList.contains('item_6') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
        })
    }
}
