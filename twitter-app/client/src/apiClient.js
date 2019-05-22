async function getTweets() {
    const response = await fetch('/api/tweets');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
}

export default {
    getTweets,
};