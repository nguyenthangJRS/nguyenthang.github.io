window.addEventListener('DOMContentLoaded',() =>{

},false)
const menu = document.querySelectorAll('.menu_link');
const tag_li = document.querySelectorAll('.menu_items');
const setMenu = document.querySelectorAll('.menu_items a');
const fate = document.querySelectorAll('.fate');
const fade_menu = document.querySelector('.menu');
const load = document.querySelector('.load');
const section = document.querySelector('.section');
const menu_btn = document.querySelector('.menu_btn .btn');
/////animation
const list_about = document.querySelectorAll('.detail_items');
const about = document.querySelector('.about_title');
const about_img = document.querySelector('.about_image');
const personal = document.querySelector('.about_wrap p');
const edu = document.querySelector('.work_title');
const edu_item = document.querySelectorAll('.edu_items');
const edu_title = document.querySelector('.work_title p');
const edu_img = document.querySelector('.edu_image');
const skill_title = document.querySelector('.skill_title');
const skill_img = document.querySelector('.skill_img');
const hyaku = document.querySelector('.hyaku');
const skill_pacent = document.querySelectorAll('.skill_pacent span');
const skill_items = document.querySelectorAll('.skill_items p');
const title_name = document.querySelector('.title_name');
const port_img = document.querySelector('.port_img');
const port_title = document.querySelector('.port_title');
const port_items = document.querySelectorAll('.port_items');
const contact = document.querySelector('#contact .span');
const span_1 = document.querySelector('#contact .span .span_1');
const span_2 = document.querySelector('#contact .span .span_2');
const local_adress = document.querySelector('#contact .local_adress');
const local_contact = document.querySelector('#contact .local_contact');
const about_title_phone = document.querySelector('.about_title_phone');
const edu_title_phone = document.querySelector('.edu_title_phone');
const skill_title_phone = document.querySelector('.skill_title_phone');
/////////////// home
const home_name = document.querySelector('.home_name .name ');
const btn_1 = menu_btn.querySelector('.btn_1');
const btn_2 = menu_btn.querySelector('.btn_2');
const btn_3 = menu_btn.querySelector('.btn_3');
const bg_menu = document.querySelector('.bg_menu');
const pointer = document.querySelector('.pointer');


let  bg_flag = false;
const check_bg = () => {
    bg_menu.style.animation = bg_flag ? `show_bg_menu 0.5s ease-in-out forwards` : 'hide_bg_menu 0.5s ease-in-out forwards';
}
bg_menu.onclick = () => {
    bg_flag = false;
    check_bg();
    flag =false;
    check_menu(flag);
    console.log(flag)

}
// console.log(name_String)
const resize_about = (personal,about,about_img,list_about) => {
    about.style.animation = `show_about_img 0.8s ease-in-out 0.5s forwards`;
    personal.style.animation = `show_title 1.4s ease-in-out 0.6s forwards`;
    about_img.style.animation = `personal 0.7s ease-in-out 0.6s forwards`;
    for(let i = 0;i<list_about.length;i++){
        let scroll = window.innerWidth
        if(scroll>570+i*25){
            list_about[i].style.animation = `list_about 1s ease-in-out ${0.25*i}s forwards`;
        }
    }

}
const resize_edu = (edu_title,edu,edu_img,edu_item) => {
    edu.style.animation = ` edu_bg 1s ease-in-out 0.5s forwards`;
    edu_title.style.animation = `show_title_edu 1.4s ease-in-out 0.6s forwards`;
    edu_img.style.animation = `work_img 0.8s ease-in-out 1.4s forwards`;
    for(let i = 0;i<edu_item.length;i++){
    edu_item[i].style.animation = `list_about 1s ease-in-out ${0.25*i}s forwards`;
}
}
const resize_skill_1 = (skill_img,skill_title) => {
    skill_title.style.animation = `skill_title 1.2s ease-in-out 0.4s forwards`;
    skill_img.style.animation = ` skill_img 1s ease-in-out 0.5s forwards`;
}
const resize_skill_2 = (skill_items,skill_pacent,hyaku) => {
    skill_pacent.forEach(item =>{
        item.style.animation = `skill_show 1.4s ease-in-out 0.5s forwards`;
    })
    skill_items.forEach(item =>{
        item.style.animation = `skill_title 0.8s ease-in-out 0.5s forwards`;
    })
    hyaku.style.animation  = `skill_title 0.8s ease-in-out 2s forwards`;
} 
const resize_pofolio = (title_name,port_img,port_title,port_items,show_port) => {
    title_name.style.animation = ` ${show_port} 2s ease-in-out 2s forwards`;
    port_img.style.animation = `port_img 1.3s ease-in-out 0.3s forwards`;
    port_title.style.animation = `port_title 1.3s ease-in-out 0.5s forwards`;
    for(let i = 0;i<port_items.length;i++){
        port_items[i].style.animation = `work_img 1.3s ease-in-out ${0.4*i}s forwards`;
}
}
const resize_contact = (contact,span_1,span_2,local_adress,local_contact) => {
    contact.style.animation = `span_title 1s ease-in-out 0.5s forwards`;
    span_1.style.animation = `span_title_1 0.7s ease-in-out 1.5s forwards`;
    span_2.style.animation = `span_title_2 0.7s ease-in-out 2.2s forwards`;
    local_adress.style.animation = ` local_adress 1.2s ease-in-out 1s forwards`;
    local_contact.style.animation = `local_contact 1.2s ease-in-out 1s forwards`;
}
const resize_contact_0 = (contact,span_1,span_2) => {
    contact.style.animation = `none`;
    span_1.style.animation = `none`;
    span_2.style.animation = `none`;
}


document.addEventListener('mousemove',function(e){
    let x = e.pageX;
    let y = e.pageY;
    pointer.style.top = `${y}px`;
    pointer.style.left = `${x}px`;
})
if(window.screen.width>=1500){
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
                span_menu.style.transform = `translateY(${-10}px)`
                span_menu.style.opacity = 0
            }
        })
    window.onscroll = () =>{
        let scroll = window.scrollY;
        
        // console.log(scroll)
/////////////////////// about         
        if(scroll<500){
            personal.style.animation = `none`;  
        }
        else{
            resize_about(personal,about,about_img,list_about);
        }
        // edu /////////////////////////////////
        if(scroll<1500){
            edu_title.style.animation = `none`;
        }
        else{
            resize_edu(edu_title,edu,edu_img,edu_item);
        }
        // skill//////////////////////////////////////
        if(scroll<2350){
            skill_img.style.animation = `none`;
        }
       else{
            resize_skill_1(skill_img,skill_title);
        }
        if(scroll>2700){
            resize_skill_2(skill_items,skill_pacent,hyaku);
        }
        //////////////// portfolio
        if(scroll<3350){
            title_name.style.animation = `none`;
        }
        else{
            resize_pofolio(title_name,port_img,port_title,port_items,'show_port');
        }
        // contact //////////
        if(scroll< 4450){
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
            if(scroll < 581){
                item.classList.contains('item_1') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll >= 581){
                item.classList.contains('item_2') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 1550){
                item.classList.contains('item_3') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 2519){
                item.classList.contains('item_4') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 3488){
                item.classList.contains('item_5') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
            if(scroll > 4651){
                item.classList.contains('item_6') ?  tag_icon.classList.add('add'):tag_icon.classList.remove('add');;
            }
        })
    }
}
//////////////////////////////////// menu btn
let flag = false;
const check_menu = (flag) => {
    if(flag){
        btn_1.classList.add('show_1')
        btn_2.classList.add('show_2')
        btn_3.classList.add('show_3')
        fade_menu.style.animation = `fade_menu 0.7s ease-in-out forwards`;
    }else{
        fade_menu.style.animation = `none`;
        if( btn_1.classList.contains('show_1')){
            btn_1.classList.remove('show_1')
        }
        if( btn_2.classList.contains('show_2')){
            btn_2.classList.remove('show_2')
        }
        if( btn_3.classList.contains('show_3')){
            btn_3.classList.remove('show_3')
        }
    }
}

menu_btn.onclick = () =>{
    flag = !flag 
    bg_flag = !bg_flag;
    check_bg();
    check_menu(flag);
    
}
menu.forEach(nav => {
    nav.onclick = (e) => {
        bg_flag =false;
        check_bg();
        flag =false;
        check_menu(flag);
        fade_menu.style.animation = `none`;
        flag = false;
        if( btn_1.classList.contains('show_1')){
            btn_1.classList.remove('show_1')
        }
        if( btn_2.classList.contains('show_2')){
            btn_2.classList.remove('show_2')
        }
        if( btn_3.classList.contains('show_3')){
            btn_3.classList.remove('show_3')
        }
        console.log(flag)
    }
})

// first load
let myName = 'NGUYEN TIEP THANG'
let show = []
let text = '';

const show_name = () => {
    const c = setTimeout(()=>{
        for(let i = 0;i<myName.length;i++){
            const time = setTimeout(() => {
                let x = myName.charAt(i)
                show.push(x)
                text += show[i]
                home_name.textContent = `${text}`
                // console.log(text)
            },i*130)
        }
    },3100)
   
  
    console.log(home_name.nextElementSibling)
}
show_name();
/////////////onmousemovie //////////////////////
