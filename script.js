var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray() {
    // Creating an array
    var arr = [];

    // Filling array with random values
    for (var i = 0; i < 20; i++) {
        // Return a value from 1 to 100 (both inclusive)
        var val = Number(Math.ceil(Math.random() * 100));
        arr.push(val);
    }

    // Sorting Array in ascending order
    arr.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < 20; i++) {
        var value = arr[i];

        // Creating element div
        var array_ele = document.createElement("div");

        // Adding class 'block' to div
        array_ele.classList.add("block");

        // Adding style to div
        array_ele.style.height = `${value * 3}px `;
        array_ele.style.transform = `translate(${i * 30}px)`;

        // Creating label element for displaying
        // size of a particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        // Appending created elements to index.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

// Asynchronous BinarySearch function
async function BinarySearch(delay = 500) {
    var blocks = document.querySelectorAll(".block");
    var output = document.getElementById("text");

    // Extracting the value of the element to be searched
    var num = document.getElementById("fname").value;

    // Resetting the color and transform of all blocks
    for (var i = 0; i < blocks.length; i += 1) {
        blocks[i].style.backgroundColor = "#6b5b95";
        blocks[i].style.transform = "transform: translate: 10px 10px 50px"; // Reset scaling
    }

    output.innerText = "";

    // Binary Search Algorithm
    var start = 0;
    var end = 19;
    var flag = 0;

    while (start <= end) {
        // Middle index
        var mid = Math.floor((start + end) / 2);

        // Highlight the middle block with scaling
        blocks[mid].style.backgroundColor = "#FF4949"; // Highlight in red
        blocks[mid].style.transform = `translate(${mid * 30}px) scaleX(1.5)`; // Scale the block

        // Wait for animation to complete
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        // Value at mid index
        var value = Number(blocks[mid].childNodes[0].innerHTML);

        if (value == num) {
            output.innerText = "Element Found";
            blocks[mid].style.backgroundColor = "#13CE66"; // Green for success
            blocks[mid].style.transform = `translate(${mid * 30}px) scaleX(2)`; // Final scale
            flag = 1;
            break;
        }

        // Adjust search range
        if (value > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

        // Reset the block after processing
        blocks[mid].style.backgroundColor = "#6b5b95";
        blocks[mid].style.transform = `translate(${mid * 30}px) scaleX(1)`;
    }

    if (flag === 0) {
        output.innerText = "Element Not Found";
    }
}

// Calling generatearray function
generatearray();