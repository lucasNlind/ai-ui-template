type Testimonial = {
    message: string,
    author: string,
    position: string,
    company: string
};

export const Testimonials: Testimonial[] = [
    {
        message: 'This thing is a game changer',
        author: 'Will Chesson',
        position: 'Software Engineer',
        company: 'Applied AI Labs'
    },
    {
        message: 'Onboard AI significantly helped me understand a new codebase by explaining relevant functions, classes, and dependencies. It reduced my learning time ten fold',
        author: 'Ashwin Dubey',
        position: 'Software Engineer',
        company: 'Meta'
    },
    {
        message: '...just today I found some really esoteric hardware config stuff the fastest I\'ve ever found it',
        author: 'Leonard Oiler',
        position: 'Field Engineer',
        company: 'Nordic Semiconductor'
    },
    {
        message: 'In the context of an API, I asked for all endpoints by HTTP type, \'What are all the GET endpoints in this repo?\' I cannot express how helpful this was',
        author: 'Larry Linn',
        position: 'CTO',
        company: 'Home Armour'
    },
    {
        message: '...this is really useful for students and researchers in the tech space as well (this is my use case)',
        author: 'Xi Weijing',
        position: 'Researcher',
        company: 'National University of Singapore'
    },
];
