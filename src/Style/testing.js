    function Model({children}){
        return (
          <div className="model">
         {children}
          </div>
        )
    }


    function ParentComponernt (){
        const data = "hello this is the prop drilling in react!"


return (
    <ChildComponet data = {data}/>
)
    }

    function ChildComponet ({data}){
        return(
            <div>
                {data}
            </div>
        )

    }

    export {ParentComponernt};