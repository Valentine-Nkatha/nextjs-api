interface SectionProps{
    heading:string;
    children: React.ReactNode
}
const SectionAtom=({heading, children}:SectionProps)=>{
    return(
<section>
    <h1 className="text-center">{heading}</h1>
    {children}

</section>
    )
}
export default SectionAtom