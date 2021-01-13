import React from 'react'
import Layout from './components/layout'
import aboutStyles from './about.module.css'


const About = () => {
    return (
        <div>
            <Layout>
                <div className={aboutStyles.aboutPage}>
                <h1 className={aboutStyles.heading}>About Me</h1>
                <div className={aboutStyles.aboutContainer}>
                    <p>Hey thanks for stopping by! The name is JT but I go by the pseudonym "TeflonTrout",
                    I'm a self proclaimed coffee expert and my journey began back in 2014.
                    Around this time, I began working as a barista at Teavana and I eventually fell in love with the intricacies of tea and the brewing methods.
                    I eventually purchased "The Classic of Tea" by Lu Yu and I realized there is so much more to beloved beverages, such as tea, than meet the eye.
                    With a strong passion for tea I quickly learned as much as I could about the processing and refining of tea leaves.
                    This newfound passion led me into the deeper subject of coffee. Up to this point I knew that I enjoyed a good cup of java but I didn't realize the depth of the subject.
                    As with tea, I immursed myself in the subject and I haven't looked back since!
                    After almost 6 years of drinking coffee, I have decided to document my journey for others to learn from my knowledge.
                    Included in my blog will be notes regarding:</p>
                    <ul>
                        <li>Tasting Notes</li>
                        <li>Brewing Methods</li>
                        <li>Roasting Techniques</li>
                        <li>Coffee Sourcing</li>
                        <li>And much more!</li>
                    </ul>
                    <p>Have a look around at some blog posts and I'm sure there is something that may interest you.</p>
                </div>
                </div>
            </Layout>
        </div>
    )
}

export default About
