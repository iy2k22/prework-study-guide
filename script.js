const topics = [ 'HTML', 'CSS', 'Git', 'JavaScript' ];

const listTopics = () => {
    for (let topic of topics)
        console.log(topic);
}

const selectTopic = () => {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    console.log(topics.includes(randomTopic) ? `Let's study ${randomTopic}!` : 'Please try again!');
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();