    class Comment {
        constructor(text){
            this.text = text; //this вказує на кожен окремий екземпляр цього классу 
            this.likesQuantity = 0
        }
        addLike(){
            this.likesQuantity += 1; //or this.likesQuantity = this.likesQuantity +1;
        }

        static mergeComments(first, second) { //статичні методи не наслідуються екземплярами классів і доступні тільки як властивість самого классу
            return `${first} + ${second}`

        }

    }

    let firstComment  = new Comment('Text 1');
    let secondComment  = new Comment('Text 2');

    let mergedText = Comment.mergeComments(firstComment.text, secondComment.text)

    console.log(mergedText);

