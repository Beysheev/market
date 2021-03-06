import React from 'react';
import first from './first.jpg';
import second from './second.jpg';
import third from './third.jpg';
import './content.css';

const Content = () => {
    return (
        <div className='content'>
            <div className="img">
                <img src={first} alt=""/>
            </div>
            <h2>Уровни pH</h2>
            <p>Итак, теперь у вас есть достаточно хорошее представление о том, что собой представляют различные кислоты и какие они на вкус. Но какое отношение это имеет к вкусу кофе, похожему на апельсин?

                Самый легкий способ "понять кислоты" — это думать о них абстрактно.

                "Апельсиновая кислинка" вовсе не означает, что ваш кофе буквально имеет вкус апельсинов.

                На самом деле, это больше похоже на характеристику: "такой же кислый, как апельсин". Чтобы проиллюстрировать эту модель, я сделал элементарную диаграмму, связывающую распространенные фрукты с соответствующими им значениями pH.</p>
            <div className="img">
                <img src={second} alt=""/>
            </div>
            <h2>Последние 150 лет Бразилия — лидер по производству кофе.</h2>
            <p>Ежегодно страна дарит миру 2,5 млн тонн кофе. Причем 80% из него составляет арабика.</p>
            <div className="img">
                <img src={third} alt=""/>
            </div>
            <h2>Как хранить кофе.</h2>
            <p>Кофе дышит.Это значит, что его нельзя хранить в полностью герметичных банках на свету. В негерметичных банках хранить тоже нельзя.
                В течение месяца после обжарки кофе выделяет углекислый газ. Зёрна нужно хранить так, чтобы это газ выходил. Однако при контакте с кислородом и при попадании света из зёрен выделяются эфирные масла — кофе выдыхается.
                Кофе нужно хранить так, что газ выходил, а воздух и свет не приходил.
                Банки, склянки, полиэтиленовые пакеты, кружки, ложки, кофемолки, кофемашины, кастрюльки и любая другая утварь не подходит для хранения кофе. Точнее, не подходит для сохранения вкуса и аромата хорошего кофе.
                Как правило, хороший кофе продаётся в непрозрачных пакетах с дегазационным клапаном. Эти пакеты — лучшее место для хранения: клапан выпускает газ наружу и не пускает ничего внутрь.</p>
        </div>
    )
};

export default Content;