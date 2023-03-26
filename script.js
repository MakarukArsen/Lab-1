const associationBtn = document.getElementById("association");
const crossingBtn = document.getElementById("crossing");
const differenceBtn = document.getElementById("difference");
const symetricDefferenceBtn = document.getElementById("symmetric difference");

const result = document.getElementById("result");

const stringToArray = (str) => {
    return str.split(",").map((item) => +item);
};

const getAssociation = (a, b) => {
    const arrayA = stringToArray(a);
    const arrayB = stringToArray(b);
    const result = [...new Set([...arrayA, ...arrayB])];
    return result;
};

const getCrossing = (a, b) => {
    const arrayA = stringToArray(a);
    const arrayB = stringToArray(b);
    const result = arrayA.filter((item) => arrayB.includes(item));
    return result;
};

const getDifference = (a, b) => {
    const arrayA = stringToArray(a);
    const arrayB = stringToArray(b);
    const result = arrayA.filter((item) => !arrayB.includes(item));
    return result;
};
const getSymmetricDifference = (a, b) => {
    const arrayA = stringToArray(a);
    const arrayB = stringToArray(b);
    const resultA = arrayA.filter((item) => !arrayB.includes(item));
    const resultB = arrayB.filter((item) => !arrayA.includes(item));
    return [...resultA, ...resultB];
};

associationBtn.addEventListener("click", () => {
    const inputA = document.getElementById("input-a").value;
    const inputB = document.getElementById("input-b").value;
    result.innerHTML = "Спільні множини з A і B: " + getAssociation(inputA, inputB);
});

crossingBtn.addEventListener("click", () => {
    const inputA = document.getElementById("input-a").value;
    const inputB = document.getElementById("input-b").value;
    result.innerHTML = "Множини які одночасно знаходяться в A і B: " + getCrossing(inputA, inputB);
});

differenceBtn.addEventListener("click", () => {
    const inputA = document.getElementById("input-a").value;
    const inputB = document.getElementById("input-b").value;
    result.innerHTML = "Множини які знаходяться тільки в A: " + getDifference(inputA, inputB);
});

symetricDefferenceBtn.addEventListener("click", () => {
    const inputA = document.getElementById("input-a").value;
    const inputB = document.getElementById("input-b").value;
    result.innerHTML = "Унікальні множини з A і B які не перетинаються: " + getSymmetricDifference(inputA, inputB);
});
