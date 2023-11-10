/**
 * @swagger
 * /post:
 *   parameters:
 *      - name: take
 *        in: query
 *        description: Number of posts to return
 *        required: false
 *        type: integer
 *        example: 10
 *      - name: skip
 *        in: query
 *        description: Number of posts to skip
 *        required: false
 *        type: integer
 *        example: 10
 *      - name: title
 *        in: query
 *        description: Title of post
 *        required: false
 *        type: string
 *        example: Hello world
 *      - name: title[]
 *        in: query
 *        description: Titles of posts
 *        required: false
 *        type: string[]
 *        example: title[]='Hello world'&title[]='Hello world again'
 *      - name: likes[]
 *        in: query
 *        description: Likes range (max length 2)
 *        type: [number,number]
 *        example: likes[]=1&likes[]=2
 *      - name: author
 *        in: query
 *        description: Author of post
 *        type: string
 *        example: Nikita Kluzka
 *      - name: author[]
 *        in: query
 *        description: Authors of posts
 *        type: string[]
 *        example: author[]='Nikita Kluzka'&author[]='Chumak Oleksandr'
 *      - name: content
 *        in: query
 *        description: Search posts by content inside
 *        type: string
 *        example: How coke
 *      - name: content[]
 *        in: query
 *        description: Search posts by content inside
 *        type: string[]
 *        example: content[]='How to coke'&content[]='How clean dirty dishes'
 *   get:
 *     description: Get posts by parameters
 *     responses:
 *       200:
 *         description: Return posts
 *       400:
 *         description: Return error
 */

