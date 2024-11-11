import Button from "../components/ui/Button";

export default function HomeContainer() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <div>
            <h2>Home Container</h2>
            <Button onClick={handleClick}>Click Me</Button>
        </div>
    );
}
