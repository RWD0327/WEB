function cardeffect(){
    const card = document.querySelector('.member_card');
    card.style.transition = 'transform 0.5s ease-in-out';
    card.style.transform = 'scale(1.2)';

    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 500);
}