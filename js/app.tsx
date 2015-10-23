var content = <div>Hello, world!</div>;

$(() => {
    let target = document.getElementById('output');
    React.render(content, target);
});
