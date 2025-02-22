import './App.css';
import Collapse from './components/Collapse';

const App = () => {
    return (
        <div>
            <h1>Пример компонента Collapse</h1>
            <Collapse collapsedLabel="Показать больше" expandedLabel="Скрыть">
                <p>
                    Это скрытый контент, который будет плавно появляться и исчезать при нажатии на кнопку.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet
                    consectetur libero. Nulla facilisi.
                </p>
            </Collapse>
        </div>
    );
};

export default App;