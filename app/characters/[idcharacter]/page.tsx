

interface ParansCharacter {

    params: Promise<{
        idcharacter: string
    }>
}

export default async function IdCharacter( { params }: ParansCharacter ) {

    const { idcharacter } = await params;
    return (

        <div>
            <h1>This is the { idcharacter }´s Website</h1>
        </div>
    )

}