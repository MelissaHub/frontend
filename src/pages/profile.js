
const Profile = () => {



    const { person } = this.props
    //destructre it {pokemon}
    //this.props is whatever the stored value is
    //made a fragment
    return (

        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{user.name}</title>
                <link rel="stylesheet" href="/CSS/showstyle.css"></link>
            </head>
            <body>
                <div className='body'>

                    <div>{user.img}</div>
                    <p>{user.text}</p>
                    <button href={`/project/${project.id}/edit`}>EDIT</button>
                    <div>reference profiles</div>


                    <div className=''>

                        <button href={`/project/${project.id}`}>{`${project.name}`} DELETE</button>

                    </div>

                </div>


            </body>
        </html>
    )

}



export default Profile;