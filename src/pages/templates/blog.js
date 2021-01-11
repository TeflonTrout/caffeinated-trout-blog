import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Radar } from 'react-chartjs-2'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


export const query = graphql`
    query($slug: String!) {
        contentfulTastingNotePost(slug: {eq: $slug}) {
            title
            postDate(formatString: "MMMM Do, YYYY")
            blogEntry {
                json
            }
            tastingValuesArray {
                Notes
            }
        }
    }
`

const Blog = (props) => {

    //Set State Variables
    const [notesData, setNotesData] = useState();

    //Set other Variables
    let noteValues = [];

    //Tasting Notes Name Array
    const tastingNotes = ["Earthy","Herbal","Sweet","Sour","Savory","Chocolate","Berry","Smokey"];

    //On Page Render run chart()
    useEffect(() => {
        //CHARTJS FUNCTION
        noteValues=(props.data.contentfulTastingNotePost.tastingValuesArray.Notes);
        const chart = () => {
            setNotesData({
                labels: tastingNotes,
                datasets: [
                    {
                        label: "NOTES",
                        data: noteValues,
                        backgroundColor: ['rgba(255, 99, 132, 0.6)']
                    }
                ],
                borderWidth: 1
            });
        }
        chart();
    }, [])

    return (
        <Layout>
            <h1>{props.data.contentfulTastingNotePost.title}</h1>
            <p>{props.data.contentfulTastingNotePost.postDate}</p>
            <div>
                <p>{documentToReactComponents(props.data.contentfulTastingNotePost.blogEntry.json)}</p>
                <Radar data={notesData} />
            </div>
        </Layout>
    )
}

export default Blog
