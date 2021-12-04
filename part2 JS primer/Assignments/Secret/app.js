const secret = (value) => {

    if (value === 300) {
        return "This is Sparta!"
    }

    else {
        return value
    }
}

console.log(secret(300))