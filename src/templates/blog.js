import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../pages/components/layout'
import blogStyles from './blog.module.css'
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
    let chartOptions = {
        legend: {
            display: false
        },
        scale: {
            yAxes: {
                ticks: {
                    min: 0,
                    max: 10
                }
            },
            ticks: {
                display: false,
                beginAtZero: true,
                fontSize: 20,
                min: 0,
                max: 10,
                suggestedMax: 0
            },
            pointLabels: {
                fontSize: 25
            },
            gridLines: {
                color: 'red'
            },
            angleLines : {
                color: 'red'
            },
        }
    }

    //Tasting Notes Name Array
    const tastingNotes = ["Sweet", "Floral", "Fruity", "Sour", "Vegetal", "Roasty/Grain", "Spicy", "Nutty", "Chocolate", "Caramel"];

    //On Page Render run chart()
    useEffect(() => {
        //CHARTJS FUNCTION
        noteValues=(props.data.contentfulTastingNotePost.tastingValuesArray.Notes);
        const chart = () => {
            setNotesData({
                labels: tastingNotes,
                datasets: [
                    {
                        label: "Value",
                        data: noteValues,
                        backgroundColor: ['rgba(156, 156, 156, 0.7)'],
                        pointRadius: 2,
                        pointHoverRadius: 4,
                        hoverBackgroundColor: ['rgba(0, 0, 0, 0)'],
                        borderColor: 'rgb(0,0,0)',
                        borderWidth: 1,
                        pointBackgroundColor: 'red',
                        pointLabelFontSize: 25,
                    }
                ],
                options: {
                    scale: {
                        pointLabels: {
                            fontSize: 25
                        },
                        gridLines: {
                            color: 'rgb(0, 0, 0)'
                        },
                        angleLines: {
                            color: 'rgb(0,0,0)'
                        }
                    }
                },
            });
        }
        chart();
    }, [])

    return (
        <Layout>
            <div className={blogStyles.blogPostPage}>
                <div className={blogStyles.postHeader}>
                    <h1 className={blogStyles.postTitle}>{props.data.contentfulTastingNotePost.title}</h1>
                    <p className={blogStyles.postDate}>{props.data.contentfulTastingNotePost.postDate}</p>
                </div>
                <div className={blogStyles.divBreak}>
                    <span className={blogStyles.lineBreak}></span>
                </div>
                <div className={blogStyles.postContainer}>
                    <p className={blogStyles.postContent}>{documentToReactComponents(props.data.contentfulTastingNotePost.blogEntry.json)}</p>
                    <br/>
                    <Radar 
                    className={blogStyles.postChart}
                    data={notesData}
                    options={chartOptions}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Blog
