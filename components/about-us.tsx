export default function AboutUs() {
    return (
        <div className="flex lg:flex-row flex-col gap-8 items-center text-primary">
            <div className="lg:max-w-lg">
            <h2 className="text-4xl">This is Little Lemon</h2>
            <p className="my-4">
                Little Lemon was founded by two close friends, Mario and 
                Adrian, who have worked together for years but feel more 
                like family. Though only Mario grew up in a Mediterranean 
                household, both chefs share a deep passion for Mediterranean 
                cuisine. Inspired by the fresh ingredients and bold flavors 
                of the region, they decided to bring their vision to Chicago’s 
                vibrant food scene. Mario’s upbringing gave him an intimate 
                knowledge of traditional recipes, while Adrian’s culinary 
                training brought a modern touch, making their menu a blend 
                of the old and the new.
            </p>
            <p>
                Their dream was to create a cozy, welcoming spot where people 
                could enjoy authentic Mediterranean dishes with a contemporary 
                twist. Little Lemon’s menu reflects the harmony between Mario’s 
                heritage and Adrian’s creativity, featuring everything from 
                classic Greek salads to inventive dishes like lemon-infused 
                desserts and fresh seafood plates. Together, they’ve built more 
                than just a restaurant—they’ve crafted a community-focused space 
                that celebrates the flavors and spirit of the Mediterranean.
            </p>
            </div>
            <div>
                <img src="https://kvijycxturiwqikcofon.supabase.co/storage/v1/object/public/public-assets/chefs-mario-and-adrian_a.jpg" 
                alt="Chefs Mario and Adrian standing side by side in the kitchen, talking to each other."
                className="w-96 object-cover rounded-sm shadow-lg ml-8"
                />
                <img src="https://kvijycxturiwqikcofon.supabase.co/storage/v1/object/public/public-assets/chefs-mario-and-adrian_b.jpg"
                alt="Chefs Mario and Adrian working together in the kitchen, smiling and laughing."
                className="w-96 object-cover rounded-sm shadow-lg mt-8 ml-8"
                />
            </div>
        </div>
    )
}