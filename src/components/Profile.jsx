export const Profile = () => {
    return (

        <section className="profil-section grid grid-cols-3 space-y-5 pb-20 border-b border-neutral-900/25 ">
            <div className="col-span-3 text-5xl text-titlegray  dark:text-darktitlegray font-semibold">
                <h1>Profile</h1>
            </div>
            <div className="col-span-3 grid grid-cols-3">
                <div className="col-span-1 flex-col space-y-6">
                    <p className="text-purple  dark:text-darkpurple text-3xl">Profile</p>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="col-span-1 space-y-4 text-l text-titlegray dark:text-darktitlegray font-semibold">
                            <p>Doğum tarihi</p>
                            <p>İkamet Şehri</p>
                            <p>Eğitim Durumu</p>
                            <p>Tercih Ettiği Rol</p>
                        </div>
                        <div className="col-span-2 space-y-4 text-l text-titlegray dark:text-darktitlegray">
                            <p>28.11.1993</p>
                            <p>İstanbul</p>
                            <p>Boğaziçi Üni. Kimya Lisans, 2021</p>
                            <p>Frontend, UI, Product Owner</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex-row space-y-6">
                    <p className="text-purple  dark:text-darkpurple text-3xl">About Me</p>
                    <p className="text-gray dark:text-darkgray text-lg">My passion for turning ideas into user-focused solutions has led me to be adaptable. I’m driven by the challenge of crafting intuitive web interfaces. I'm energized by problem-solving and collaborating with teams to build products that exceed user expectations. I'm excited to apply my skills and insights in a dynamic development environment. </p>
                </div>
            </div>
        </section>
    )
}

export default Profile;