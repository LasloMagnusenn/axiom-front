import React from 'react';


const Feedback = () => {

    return ( 
        <>
            <section className="feedback">
                <div className="wrapper">
                    <div className="feedback-conteiner">
                        <div className="feedback-conteiner-title">
                            <h2>Узнайте как стать <br /> инвестором</h2>
                            <p>
                                Заполните короткую форму обратной связи и <br /> 
                                наш менеджер свяжется с вами в ближайшее <br />
                                время.
                            </p>
                        </div>
                        <div className="feedback-conteiner-content">
                            <h3>Ваше имя</h3>
                            <input type="text" placeholder="Введите ваше имя"/>
                            <h3>Ваш телефон</h3>
                            <input type="text" placeholder="Введите ваш номер телефона"/>
                            <p>Нажимая на кнопку, соглашаюсь <br /> с <span>политикой обработки персональных данных</span></p>
                            <div className="feedback-button-conteiner">
                                <button className="feedback-button button">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Feedback;