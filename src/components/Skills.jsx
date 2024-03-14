
export const Skills = () => {


    return (
        <section className='skills-section grid grid-cols-3 space-y-6 pb-20 border-b border-neutral-900/25'>
            <div className='col-span-3 text-[48px] text-titlegray dark:text-darktitlegray font-semibold '>
                <h1>Skills</h1>
            </div>
            <div className='col-span-3 grid grid-cols-3 gap-7'>
                <div class='flex flex-col col-span-1 space-y-6'>
                    <div className="text-purple dark:text-darkpurple text-[30px]">Java Script</div>
                    <div className="text-gray dark:text-darkgray text-[12px]">JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS.</div>
                </div>
                <div class='flex flex-col col-span-1 space-y-6'>
                    <div className="text-purple  dark:text-darkpurple text-[30px]">React.Js</div>
                    <div className="text-gray  dark:text-darkgray text-[12px]">React is a free and open-source front-end JavaScript library for building user interfaces based on components.</div>
                </div>
                <div class='flex flex-col col-span-1 space-y-6'>
                    <div className="text-purple dark:text-darkpurple text-[30px]">Node.Js</div>
                    <div className="text-gray  dark:text-darkgray  text-[12px]">Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. </div>
                </div>
            </div>

        </section>
    );
}

export default Skills;