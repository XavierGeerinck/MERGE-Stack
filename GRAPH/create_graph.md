CREATE (u:User { email: "james.warr@gmail.com", password: "test123", name: "James Warr" })
CREATE (ut:UserToken { token: "sometokentologin" })
CREATE (p1:Post { imageUrl: "https://www.planwallpaper.com/static/images/kartandtinki1_photo-wallpapers_02.jpg", description: "Post 1" })
CREATE (p2:Post { imageUrl: "http://www.planwallpaper.com/static/images/city_of_love-wallpaper-1366x768.jpg", description: "Post 2" })
CREATE (p3:Post { imageUrl: "https://www.planwallpaper.com/static/images/butterfly-wallpaper.jpeg", description: "Post 3" })
CREATE (p4:Post { imageUrl: "https://static.pexels.com/photos/36487/above-adventure-aerial-air.jpg", description: "Post 4" })
CREATE (p5:Post { imageUrl: "http://www.uniwallpaper.com/static/images/EPUlp9X_YqNR99f.jpg", description: "Post 5" })
CREATE (p6:Post { imageUrl: "http://www.uniwallpaper.com/static/images/6890733-mountain-peaks-wallpaper-hd_PZTQDff.jpg", description: "Post 6" })
CREATE (p7:Post { imageUrl: "http://www.uniwallpaper.com/static/images/jetty-landing-stage-sea-sky_uX9jR4A.jpeg", description: "Post 7" })
CREATE (p8:Post { imageUrl: "http://www.uniwallpaper.com/static/images/eiffel-tower-wallpaper-18_fRZLW4V.jpg", description: "Post 8" })

CREATE 
    (u)-[:HAS_TOKEN]->(ut),
    (ut)-[:BELONGS_TO]->(u),
    (u)-[:POSTED]->(p1),
    (p1)-[:POSTED_BY]->(u),
    (u)-[:POSTED]->(p2),
    (p2)-[:POSTED_BY]->(u),
    (u)-[:POSTED]->(p3),
    (p3)-[:POSTED_BY]->(u),
    (u)-[:POSTED]->(p4),
    (p4)-[:POSTED_BY]->(u),
    (u)-[:POSTED]->(p5),
    (p5)-[:POSTED_BY]->(u),
    (u)-[:POSTED]->(p6),
    (p6)-[:POSTED_BY]->(u),
    (u)-[:POSTED]->(p7),
    (p7)-[:POSTED_BY]->(u),
    (u)-[:POSTED]->(p8),
    (p8)-[:POSTED_BY]->(u)