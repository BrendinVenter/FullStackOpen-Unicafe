import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const Title = ({text}) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

const SubTitle = ({text}) => {
    return (
        <div>
            <h2>{text}</h2>
        </div>
    );
};

const StatsDisplay = ({statValue, statPercentage, text}) => {

    if (statValue === 0) {
        return <></>;
    } else {
        return (
            <div>
                <h3>{text.toUpperCase()}</h3>
                <p>{statValue}</p>
                <hr/>
                <p>{statPercentage}</p>
            </div>
        );
    }
};

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    );
};

function App() {

    /* State */
    const [goodCount, setGoodCount] = useState(0);
    const [neutralCount, setNeutralCount] = useState(0);
    const [badCount, setBadCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    /* Functions */
    const tallyButton = (value, setValue) => {
        return () => {
            setValue(value + 1);
            setTotalCount(totalCount + 1);
        };
    };

    const calcAverage = () => Math.floor((goodCount + neutralCount + badCount) / 3);

    const calcPercentage = (stateCount = 0) => {
        return `${Math.floor((stateCount / totalCount) * 100)} %`;
    };

    const resetTally = () => {
        setGoodCount(0);
        setNeutralCount(0);
        setBadCount(0);
        setTotalCount(0);
    };

    /* Return */
    return (
        <div className='App'>
            <div className={'Content'}>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                </header>
                <main className='Main-section'>
                    <Title text={'Give Your Feedback'}/>
                    <div>
                        <Button handleClick={tallyButton(goodCount, setGoodCount)} text={'Positive'}/>
                        <Button handleClick={tallyButton(neutralCount, setNeutralCount)} text={'Neutral'}/>
                        <Button handleClick={tallyButton(badCount, setBadCount)} text={'Bad'}/>
                    </div>
                    <div>
                        <SubTitle text={'Statistics'}/>
                        <div className={'Stats-display'}>
                            <StatsDisplay statValue={goodCount} statPercentage={calcPercentage(goodCount)} text={'Good'}/>
                            <StatsDisplay statValue={neutralCount} statPercentage={calcPercentage(neutralCount)} text={'Neutral'}/>
                            <StatsDisplay statValue={badCount} statPercentage={calcPercentage(badCount)} text={'Bad'}/>
                        </div>
                        <StatsDisplay statValue={calcAverage()} text={'Average Score'}/>
                    </div>
                    <div>
                        <Button handleClick={resetTally} text={'Reset'}/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
