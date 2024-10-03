const blogPosts = [
    // IT Section
    {
        "title": "Advancements in Quantum Computing",
        "description": "Discover the latest breakthroughs in quantum computing and how they are shaping the future of technology. With quantum computing evolving rapidly, researchers are achieving unprecedented computational speeds, solving complex problems in seconds that would take classical computers thousands of years. Learn about quantum supremacy, new qubit technologies, and how these advancements are paving the way for revolutionary applications in fields such as cryptography, material science, and artificial intelligence.",
        "imageUrl": "assets/blog_01.jpeg",
        "author": "Alice Carter",
        "authorImage": "assets/author_image.jpeg",
        "date": "September 5, 2024",
        "section": "IT"
    },
    {
        "title": "The Impact of AI on Software Development",
        "description": "Explore how AI is revolutionizing software development processes and enhancing productivity. With AI-powered tools like code generators, automated testing frameworks, and intelligent code review systems, development cycles are becoming faster and more efficient. Discover how companies are leveraging machine learning to predict project timelines, automate repetitive tasks, and provide real-time assistance to developers, making software development more innovative and less error-prone.",
        "imageUrl": "assets/blog_02.jpeg",
        "author": "John Smith",
        "authorImage": "assets/author_image.jpeg",
        "date": "August 28, 2024",
        "section": "IT"
    },
    {
        "title": "Cybersecurity Trends in 2024",
        "description": "Learn about the latest trends in cybersecurity and how organizations can protect themselves. In 2024, new strategies like zero trust architecture, AI-driven threat detection, and post-quantum cryptography are becoming essential to safeguard data. Understand how these trends are countering emerging threats such as advanced ransomware, deepfake frauds, and supply chain attacks, while emphasizing the importance of a proactive and adaptable security posture.",
        "imageUrl": "assets/blog_03.jpeg",
        "author": "Laura Thompson",
        "authorImage": "assets/author_image.jpeg",
        "date": "July 15, 2024",
        "section": "IT"
    },
    {
        "title": "Building Scalable Cloud Solutions",
        "description": "Understand the key components of building scalable solutions on the cloud for businesses. From microservices architecture to container orchestration and serverless computing, discover how cloud-native technologies are enabling companies to scale their applications seamlessly. Learn how to optimize resource allocation, improve cost efficiency, and implement robust cloud security measures for handling unpredictable workloads in a dynamic digital landscape.",
        "imageUrl": "assets/blog_04.jpeg",
        "author": "Michael Brown",
        "authorImage": "assets/author_image.jpeg",
        "date": "June 30, 2024",
        "section": "IT"
    },
    {
        "title": "The Future of Augmented Reality",
        "description": "Dive into the potential applications of augmented reality across various industries. As AR technology becomes more sophisticated, its applications are expanding beyond gaming and entertainment into fields such as education, healthcare, retail, and industrial design. Explore how AR is transforming training processes, providing immersive customer experiences, and enabling remote collaboration, thereby shaping the future of human-computer interaction.",
        "imageUrl": "assets/blog_05.jpeg",
        "author": "Emily Davis",
        "authorImage": "assets/author_image.jpeg",
        "date": "May 10, 2024",
        "section": "IT"
    },
    // R&D Section
    {
        "title": "Innovations in Renewable Energy",
        "description": "Explore the cutting-edge innovations in renewable energy and their impact on the environment. From advancements in solar panel efficiency to breakthroughs in wind turbine designs and new energy storage solutions, discover how these innovations are accelerating the global shift toward sustainable energy. Learn how technologies like green hydrogen, floating wind farms, and bioenergy are transforming the renewable energy landscape, reducing carbon emissions, and promoting energy independence.",
        "imageUrl": "assets/blog_R&D_01.avif",
        "author": "Alice Carter",
        "authorImage": "assets/author_image.jpeg",
        "date": "September 12, 2024",
        "section": "R&D"
    },
    {
        "title": "Biotechnology Advancements in Healthcare",
        "description": "Understand the role of biotechnology in advancing healthcare solutions and treatments. Explore how gene editing technologies like CRISPR, personalized medicine, and biopharmaceutical developments are creating new pathways for treating diseases. Discover the latest innovations in tissue engineering, regenerative medicine, and synthetic biology, which are transforming diagnostics and therapeutics, and paving the way for a future where healthcare is more precise, effective, and accessible.",
        "imageUrl": "assets/blog_R&D_02.avif",
        "author": "John Smith",
        "authorImage": "assets/author_image.jpeg",
        "date": "August 25, 2024",
        "section": "R&D"
    },
    {
        "title": "Robotics and Automation in Industry",
        "description": "Learn how robotics and automation are transforming industrial processes and workflows. From autonomous robots in manufacturing to AI-driven supply chain management and precision agriculture, robotics is enhancing efficiency, reducing human error, and enabling 24/7 operations. Delve into how collaborative robots (cobots) and industrial automation systems are creating smarter factories, boosting productivity, and reshaping the future of work across sectors.",
        "imageUrl": "assets/blog_R&D_03.avif",
        "author": "Laura Thompson",
        "authorImage": "assets/author_image.jpeg",
        "date": "July 20, 2024",
        "section": "R&D"
    },
    {
        "title": "Materials Science: The Future of Manufacturing",
        "description": "Dive into materials science and its potential to revolutionize manufacturing techniques. Discover how new materials like graphene, nanocomposites, and 3D-printed metals are enabling lighter, stronger, and more durable products. Learn about the development of smart materials that can self-heal, change properties in response to external stimuli, and reduce environmental impact, making manufacturing more efficient and sustainable.",
        "imageUrl": "assets/blog_R&D_04.avif",
        "author": "Michael Brown",
        "authorImage": "assets/author_image.jpeg",
        "date": "June 15, 2024",
        "section": "R&D"
    },
    {
        "title": "Sustainable Practices in R&D",
        "description": "Explore the importance of sustainable practices in research and development. As environmental concerns take center stage, R&D is focusing on eco-friendly methodologies, from reducing energy consumption in labs to adopting green chemistry principles. Learn how organizations are minimizing their ecological footprint through the use of sustainable materials, waste reduction strategies, and renewable energy integration, setting a new standard for responsible innovation.",
        "imageUrl": "assets/blog_R&D_05.avif",
        "author": "Emily Davis",
        "authorImage": "assets/author_image.jpeg",
        "date": "May 5, 2024",
        "section": "R&D"
    },
    // Product Section
    {
        "title": "User-Centric Product Design",
        "description": "Learn how user-centric design principles can enhance product development and user satisfaction. This blog explores the core elements of creating products that truly meet users' needs, including empathy mapping, user journey analysis, and feedback loops. Discover practical strategies for implementing user-centric methodologies in your design process to ensure a seamless and intuitive user experience.",
        "imageUrl": "assets/blog_product_01.avif",
        "author": "Alice Carter",
        "authorImage": "assets/author_image.jpeg",
        "date": "September 20, 2024",
        "section": "Product"
    },
    {
        "title": "Agile Methodologies for Product Management",
        "description": "Understand how agile methodologies can improve product management efficiency. This article delves into agile principles such as Scrum, Kanban, and Lean, and how they can be applied to manage complex projects, reduce time to market, and adapt to changing requirements. Learn best practices for implementing agile in cross-functional teams and maximizing collaboration to create more responsive product development cycles.",
        "imageUrl": "assets/blog_product_02.avif",
        "author": "John Smith",
        "authorImage": "assets/author_image.jpeg",
        "date": "August 18, 2024",
        "section": "Product"
    },
    {
        "title": "The Importance of MVP in Product Development",
        "description": "Discover why creating a Minimum Viable Product (MVP) is crucial for success. This blog explains how launching with an MVP allows companies to test their ideas, gather real-world feedback, and minimize risks. It covers practical steps for defining MVP features, prioritizing development tasks, and iterating based on user insights to achieve a better product-market fit.",
        "imageUrl": "assets/blog_product_03.avif",
        "author": "Laura Thompson",
        "authorImage": "assets/author_image.jpeg",
        "date": "July 25, 2024",
        "section": "Product"
    },
    {
        "title": "Navigating Product Market Fit",
        "description": "Explore strategies for finding and achieving product market fit. This comprehensive guide highlights the importance of aligning your product with the right target audience, understanding customer pain points, and continuously iterating based on market feedback. Learn how to use key metrics to measure product market fit and implement a systematic approach for achieving sustainable growth.",
        "imageUrl": "assets/blog_product_04.avif",
        "author": "Michael Brown",
        "authorImage": "assets/author_image.jpeg",
        "date": "June 10, 2024",
        "section": "Product"
    },
    {
        "title": "Best Practices for Product Launch",
        "description": "Learn best practices to ensure a successful product launch in the market. This article covers everything from pre-launch marketing strategies and audience engagement to post-launch analysis and optimization. Understand how to set realistic goals, build anticipation, and execute a launch plan that captures attention, drives adoption, and sets the stage for long-term success.",
        "imageUrl": "assets/blog_product_05.avif",
        "author": "Emily Davis",
        "authorImage": "assets/author_image.jpeg",
        "date": "May 15, 2024",
        "section": "Product"
    },

    // Financial Section
    {
        "title": "Investing in Emerging Markets",
        "description": "Explore the opportunities and risks of investing in emerging markets. This blog covers the high-growth potential in regions such as Asia, Latin America, and Africa, while also addressing the challenges of market volatility, currency risks, and political instability. Learn how to balance risk with reward and make informed investment decisions in these evolving economies.",
        "imageUrl": "assets/blog_Financial_01.avif",
        "author": "Alice Carter",
        "authorImage": "assets/author_image.jpeg",
        "date": "September 15, 2024",
        "section": "Financial"
    },
    {
        "title": "Cryptocurrency Trends in 2024",
        "description": "Understand the evolving landscape of cryptocurrency and its potential for investors. This article highlights key trends like the rise of decentralized finance (DeFi), institutional adoption, and the increasing use of stablecoins. Gain insight into how the regulatory environment is shifting and what it means for both new and seasoned crypto investors.",
        "imageUrl": "assets/blog_Financial_02.avif",
        "author": "John Smith",
        "authorImage": "assets/author_image.jpeg",
        "date": "August 30, 2024",
        "section": "Financial"
    },
    {
        "title": "The Future of Digital Banking",
        "description": "Learn how digital banking is changing the financial industry and consumer experiences. This blog explores the latest innovations in fintech, such as mobile banking apps, AI-driven financial services, and blockchain-based transactions. Discover how these advancements are improving customer experience and reducing costs for financial institutions.",
        "imageUrl": "assets/blog_Financial_03.avif",
        "author": "Laura Thompson",
        "authorImage": "assets/author_image.jpeg",
        "date": "July 10, 2024",
        "section": "Financial"
    },
    {
        "title": "Personal Finance Tips for 2024",
        "description": "Explore essential personal finance tips to manage your money effectively. This article provides practical advice on budgeting, saving for retirement, managing debt, and navigating investments in a turbulent market. Learn how to build a solid financial foundation in 2024 by using tools and strategies that fit your lifestyle.",
        "imageUrl": "assets/blog_Financial_04.avif",
        "author": "Michael Brown",
        "authorImage": "assets/author_image.jpeg",
        "date": "June 20, 2024",
        "section": "Financial"
    },
    {
        "title": "Investment Strategies for Beginners",
        "description": "Learn key investment strategies for beginners looking to grow their wealth. This blog breaks down fundamental concepts like diversification, asset allocation, and risk management. It offers actionable steps on how to start investing with confidence, understand different asset classes, and make smart decisions tailored to your financial goals.",
        "imageUrl": "assets/blog_Financial_05.avif",
        "author": "Emily Davis",
        "authorImage": "assets/author_image.jpeg",
        "date": "May 25, 2024",
        "section": "Financial"
    },

    // M2C Section
    {
        "title": "The Rise of Direct-to-Consumer Brands",
        "description": "Discover how DTC brands are changing the retail landscape and consumer behavior. This blog explores the growth of direct-to-consumer (DTC) business models, examining how they empower brands to build stronger relationships with their customers and cut out middlemen. Learn about the impact of e-commerce platforms, subscription services, and personalized marketing in driving DTC success.",
        "imageUrl": "assets/blog_M2C_01.avif",
        "author": "Alice Carter",
        "authorImage": "assets/author_image.jpeg",
        "date": "September 18, 2024",
        "section": "M2C"
    },
    {
        "title": "Leveraging Social Media for M2C Marketing",
        "description": "Learn how to effectively use social media to boost your M2C marketing strategy. This article covers the best practices for creating engaging content, building a strong brand presence, and driving customer engagement through platforms like Instagram, TikTok, and Facebook. Understand how social media algorithms, influencer partnerships, and paid ads can help you reach a wider audience and grow your business.",
        "imageUrl": "assets/blog_M2C_02.avif",
        "author": "John Smith",
        "authorImage": "assets/author_image.jpeg",
        "date": "August 22, 2024",
        "section": "M2C"
    },
    {
        "title": "Building Customer Loyalty in M2C",
        "description": "Explore strategies to foster customer loyalty in a direct-to-consumer model. This blog highlights the importance of personalized experiences, loyalty programs, and consistent communication in retaining customers. Learn how DTC brands can leverage data and insights to build long-lasting relationships and create advocates for their products.",
        "imageUrl": "assets/blog_M2C_03.avif",
        "author": "Laura Thompson",
        "authorImage": "assets/author_image.jpeg",
        "date": "July 5, 2024",
        "section": "M2C"
    },
    {
        "title": "Challenges in M2C Business Models",
        "description": "Understand the common challenges faced by M2C brands and how to overcome them. This blog examines issues like inventory management, scaling operations, and managing customer expectations. Get actionable insights on how to navigate these challenges while maintaining profitability and delivering a superior customer experience.",
        "imageUrl": "assets/blog_M2C_04.avif",
        "author": "Michael Brown",
        "authorImage": "assets/author_image.jpeg",
        "date": "June 25, 2024",
        "section": "M2C"
    },
    {
        "title": "Innovative Product Strategies for M2C",
        "description": "Learn about innovative product strategies that can enhance M2C offerings. This blog covers product development trends such as rapid prototyping, limited edition drops, and customer-driven design. Discover how brands are using these strategies to differentiate themselves in a competitive market and meet evolving consumer demands.",
        "imageUrl": "assets/blog_M2C_05.avif",
        "author": "Emily Davis",
        "authorImage": "assets/author_image.jpeg",
        "date": "May 20, 2024",
        "section": "M2C"
    },

    // Industrial Section
    {
        title: "Automation in Manufacturing: Benefits and Challenges",
        description: "Explore how automation is transforming the manufacturing industry, enhancing productivity, and reducing operational costs. Understand the key challenges such as implementation costs, workforce displacement, and maintenance requirements that come with adopting automation technologies.",
        imageUrl: "assets/blog_Industial_01.avif",
        author: "Alice Carter",
        authorImage: "assets/author_image.jpeg",
        date: "September 30, 2024",
        section: "Industrial"
    },
    {
        title: "Sustainability in Industrial Operations",
        description: "Learn about sustainable practices in industrial operations, including energy-efficient production methods, waste reduction techniques, and the adoption of green technologies. Discover the importance of sustainability for improving environmental impact and long-term business resilience.",
        imageUrl: "assets/blog_Industial_02.avif",
        author: "John Smith",
        authorImage: "assets/author_image.jpeg",
        date: "August 17, 2024",
        section: "Industrial"
    },
    {
        title: "Supply Chain Innovations in Industry",
        description: "Discover the latest innovations in supply chain management within industrial settings, such as the use of blockchain for transparency, AI for demand forecasting, and IoT for real-time tracking. Learn how these technologies are streamlining operations and driving competitive advantage.",
        imageUrl: "assets/blog_Industial_03.avif",
        author: "Laura Thompson",
        authorImage: "assets/author_image.jpeg",
        date: "July 28, 2024",
        section: "Industrial"
    },
    {
        title: "Safety Standards in Industrial Environments",
        description: "Understand the key safety standards and regulations that industrial organizations must adhere to, such as OSHA guidelines and ISO safety certifications. Learn about best practices for maintaining a safe working environment and how technology is enhancing workplace safety.",
        imageUrl: "assets/blog_Industial_04.avif",
        author: "Michael Brown",
        authorImage: "assets/author_image.jpeg",
        date: "June 12, 2024",
        section: "Industrial"
    },
    {
        title: "Future Trends in Industrial Engineering",
        description: "Explore the future trends in industrial engineering, including advancements in robotics, the rise of Industry 4.0, and the shift towards smart manufacturing. Understand the potential impact of these trends on production efficiency, workforce roles, and global competitiveness.",
        imageUrl: "assets/blog_Industial_05.avif",
        author: "Emily Davis",
        authorImage: "assets/author_image.jpeg",
        date: "May 2, 2024",
        section: "Industrial"
    }

];

const params = new URLSearchParams(window.location.search);
        
// Retrieve the parameters
const section = params.get('section');

const blogContainer = document.getElementById('blog-container');

// Filter blog posts based on the section
const filteredPosts = section ? blogPosts.filter(post => post.section === section) : blogPosts;


filteredPosts.forEach(post => {
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');

    blogCard.innerHTML = `
        <a href="${post.link}"> <!-- Wrap image in an anchor tag -->
            <img src="${post.imageUrl}" alt="${post.title}" class="blog-image">
        </a>
        <div class="blog-content">
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-description">${post.description}</p>
        </div>
        <div class="author-content">
        <img src="${post.authorImage}" alt="Author image" class="author-image">
        <div class="author-info">
            <p class="author-name">${post.author}</p>
            <p class="author-date">${post.date}</p>
        </div>
    `;

    blogContainer.appendChild(blogCard);
});









