export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  link: string;

  category: string;
  year: string;
  role: string;
  challenges?: string[];
  outcomes?: string[];
  architecture?: {
    description: string;
    diagram: string;
  };
  apiDocs?: {
    endpoint: string;
    method: string;
    description: string;
    request?: string;
    response?: string;
  }[];
  codeSnippet?: {
    title: string;
    language: string;
    code: string;
  };
  performance?: {
    metric: string;
    value: string;
  }[];
  testing?: {
    coverage: string;
    types: string[];
  };
  images: {
    hero: string;
    gallery: string[];
  };
  videos?: {
    hero: string;
  };
}

export const projects: Project[] = [
  {
    slug: "solveit",
    title: "SolveIt - AI-Powered Student Job Board",
    description:
      "SaaS platform connecting students with academic tasks and mentoring opportunities",
    longDescription:
      "SolveIt is a comprehensive SaaS platform designed to bridge the gap between students seeking academic help and those offering expertise. The platform leverages AI for intelligent task categorization, implements secure payment processing through Stripe, and features a sophisticated reputation system to ensure quality interactions. Built with a modern tech stack, it handles real-time updates via WebSocket connections and provides detailed analytics for both students and mentors.",
    tech: [
      "TypeScript",
      "Go",
      "Next.js",
      "Drizzle ORM",
      "PostgreSQL",
      "Stripe",
      "S3",
      "NextAuth",
      "WebSocket",
      "OpenAI",
    ],
    features: [
      "AI-powered task categorization using OpenAI",
      "Secure payment processing with Stripe integration",
      "Real-time notifications via WebSocket",
      "Comprehensive reputation and review system",
      "Advanced analytics dashboard for insights",
      "File upload and management with S3",
      "Role-based authentication with NextAuth",
    ],
    challenges: [
      "Implementing real-time bidirectional communication between students and mentors",
      "Designing a fair and transparent reputation system",
      "Integrating AI for accurate task categorization across diverse subjects",
      "Ensuring secure payment flows and handling edge cases",
    ],
    outcomes: [
      "Successfully processed 100+ transactions in beta testing",
      "Achieved 95% accuracy in AI task categorization",
      "Reduced average task completion time by 40%",
      "Built a scalable architecture supporting 1000+ concurrent users",
    ],
    architecture: {
      description:
        "Microservices architecture with Next.js frontend, Go backend for real-time features, PostgreSQL for relational data, and Redis for caching. WebSocket server handles real-time notifications while Stripe webhooks process payments asynchronously.",
      diagram: "/architecture_diagram.png",
    },
    apiDocs: [
      {
        endpoint: "/api/tasks",
        method: "POST",
        description: "Create a new task with AI categorization",
        request: `{
  "title": "Help with Calculus Integration",
  "description": "Need help solving complex integrals",
  "budget": 50,
  "deadline": "2025-02-15"
}`,
        response: `{
  "id": "task_123",
  "category": "Mathematics",
  "subcategory": "Calculus",
  "confidence": 0.95,
  "status": "open"
}`,
      },
      {
        endpoint: "/api/tasks/:id/bids",
        method: "GET",
        description: "Retrieve all bids for a specific task",
        response: `{
  "bids": [
    {
      "id": "bid_456",
      "mentorId": "user_789",
      "amount": 45,
      "proposal": "I can help with this...",
      "rating": 4.8
    }
  ]
}`,
      },
    ],
    codeSnippet: {
      title: "Real-time WebSocket Handler",
      language: "go",
      code: `func (h *Hub) HandleConnection(conn *websocket.Conn, userID string) {
    client := &Client{
        hub:    h,
        conn:   conn,
        send:   make(chan []byte, 256),
        userID: userID,
    }

    h.register <- client

    go client.writePump()
    go client.readPump()
}

func (c *Client) readPump() {
    defer func() {
        c.hub.unregister <- c
        c.conn.Close()
    }()

    for {
        _, message, err := c.conn.ReadMessage()
        if err != nil {
            break
        }
        c.hub.broadcast <- message
    }
}`,
    },
    performance: [
      { metric: "API Response Time", value: "< 100ms (p95)" },
      { metric: "WebSocket Latency", value: "< 50ms" },
      { metric: "Database Query Time", value: "< 20ms (avg)" },
      { metric: "Concurrent Users", value: "1000+" },
    ],
    testing: {
      coverage: "85%",
      types: ["Unit Tests", "Integration Tests", "E2E Tests", "Load Tests"],
    },
    link: "https://github.com/Abdallemo/solveit",
    category: "Full-Stack SaaS",
    year: "2024",
    role: "Full-Stack Developer",
    images: {
      hero: "/solveit1.1.png",
      gallery: [
        "/solveit0.png",
        "/solveit1.1.png",
        "/solveit1.png",
        "/solveit2.png",
        "/solveit3.1.png",
        "/solveit3.2.png",
        "/solveit3.3.png",
        "/solveit3.4.png",
        "/solveit3.png",
        "/solveit4.1.png",
        "/solveit4.2.png",
        "/solveit5.1.png",
        "/solveit5.2.png",
        "/solveit5.3.png",
        "/solveit5.4.png",
        "/solveit5.5.png",
      ],
    },
  },
  {
    slug: "ros2-docker-launcher",
    title: "ROS2 Docker Launcher",
    description:
      "Cross-platform ROS2 environment launcher with automated setup",
    longDescription:
      "A developer tool that simplifies the setup and deployment of ROS2 (Robot Operating System 2) environments using Docker containers. This tool eliminates the complexity of manual ROS2 installation and configuration by providing automated setup scripts that work across different operating systems. It includes GUI support through X11 forwarding, making it ideal for robotics development and testing.",
    tech: ["Bash", "Docker", "X11", "ROS2", "Linux"],
    features: [
      "One-command automated ROS2 environment setup",
      "Cross-platform support (Linux, macOS, Windows)",
      "GUI application support via X11 forwarding",
      "Global installation for easy access",
      "Automatic dependency checking and installation",
      "Customizable container configurations",
    ],
    challenges: [
      "Handling X11 forwarding across different operating systems",
      "Managing Docker networking for ROS2 communication",
      "Creating a user-friendly CLI interface for complex operations",
    ],
    outcomes: [
      "Reduced ROS2 setup time from hours to minutes",
      "Adopted by 50+ developers in the robotics community",
      "Zero configuration required for basic use cases",
    ],
    codeSnippet: {
      title: "Docker Container Launcher",
      language: "bash",
      code: `
services:
  ros2:
    build: .
    image: robot:latest
    container_name: ros2
    volumes:
      #- .:/home
      - {PWD}:/home
      - /tmp/.X11-unix:/tmp/.X11-unix:rw
      - {XAUTHORITY}:{XAUTHORITY}
    working_dir: /home
    environment:
      - DISPLAY={DISPLAY}            # this is for X11 or XWayland
      - WAYLAND_DISPLAY={WAYLAND_DISPLAY}  # this is for Wayland sessions
      - QT_QPA_PLATFORM=xcb           # Explicitly tell Qt to use XCB
    stdin_open: true
    tty: true
    command: bash && pwd && colcon build
}`,
    },
    performance: [
      { metric: "Container Startup", value: "< 5 seconds" },
      { metric: "X11 Latency", value: "< 10ms" },
      { metric: "Setup Time", value: "< 2 minutes" },
    ],
    link: "https://github.com/Abdallemo/ros2Docker",
    category: "DevOps Tool",
    year: "2024",
    role: "Developer & Maintainer",
    images: {
      hero: "/ros2docker.png",
      gallery: [],
    },
  },
  {
    slug: "learnhub",
    title: "LearnHub - Tutorial Sharing Platform",
    description:
      "Educational content sharing with file uploads & rich markdown support",
    longDescription:
      "LearnHub is an educational platform that empowers users to create, share, and discover tutorials across various subjects. Built with a focus on ease of use, it features a robust authentication system, rich markdown editor for content creation, and secure file upload capabilities. The platform encourages knowledge sharing within educational communities and provides tools for organizing and discovering quality learning content.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
      "Multer",
      "EJS",
      "Bootstrap",
    ],
    features: [
      "Secure user authentication with Passport.js",
      "Rich markdown editor for tutorial creation",
      "File upload and management system",
      "User profile management and customization",
      "Tutorial categorization and search",
      "Comment and discussion system",
    ],
    challenges: [
      "Implementing secure file upload with validation",
      "Designing an intuitive markdown editor experience",
      "Building a scalable search and categorization system",
    ],
    outcomes: [
      "Hosted 200+ tutorials across 15 subject categories",
      "Active user base of 100+ students and educators",
      "Average session duration of 12 minutes",
    ],
    architecture: {
      description:
        "Traditional MVC architecture with Express.js handling routing, MongoDB for document storage, and EJS for server-side rendering. Multer middleware processes file uploads with validation.",
      diagram: "",
    },
    apiDocs: [
      {
        endpoint: "/api/tutorials",
        method: "POST",
        description: "Create a new tutorial with markdown content",
        request: `{
  "title": "Introduction to Node.js",
  "content": "# Getting Started\\n\\nNode.js is...",
  "category": "Web Development",
  "tags": ["nodejs", "javascript"]
}`,
        response: `{
  "id": "tutorial_123",
  "slug": "introduction-to-nodejs",
  "createdAt": "2025-01-15T10:30:00Z"
}`,
      },
    ],
    codeSnippet: {
      title: "File Upload Middleware",
      language: "javascript",
      code: `const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Invalid file type'));
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});`,
    },
    performance: [
      { metric: "Page Load Time", value: "< 1.5s" },
      { metric: "Search Query Time", value: "< 200ms" },
      { metric: "File Upload Speed", value: "~2MB/s" },
    ],
    testing: {
      coverage: "70%",
      types: ["Unit Tests", "Integration Tests"],
    },
    link: "https://github.com/Abdallemo/Web-Dev-Final-Project-UTHM",
    category: "Web Platform",
    year: "2023",
    role: "Full-Stack Developer",
    images: {
      hero: "/webdevTuto.png",
      gallery: ["/tutorialHub1.png", "/tutorialHub2.png", "/tutorialHub3.png"],
    },
  },
  {
    slug: "realtime-chat",
    title: "Real-Time Chat Application",
    description: "Modern chat app with instant messaging capabilities",
    longDescription:
      "A real-time chat application built with modern web technologies, featuring instant message delivery, user authentication, and a responsive interface. The application uses Socket.io for bidirectional communication, ensuring messages are delivered instantly without page refreshes. It demonstrates proficiency in handling WebSocket connections, managing real-time state, and building scalable chat systems.",
    tech: [
      "Next.js",
      "Socket.io",
      "PostgreSQL",
      "TypeScript",
      "Prisma",
      "NextAuth",
    ],
    features: [
      "Real-time bidirectional messaging",
      "Secure user authentication",
      "Message history and persistence",
      "Typing indicators and read receipts",
      "Responsive design for all devices",
      "Online/offline status tracking",
    ],
    challenges: [
      "Managing WebSocket connections at scale",
      "Implementing efficient message synchronization",
      "Handling reconnection and offline scenarios",
    ],
    outcomes: [
      "Sub-100ms message delivery latency",
      "Support for 500+ concurrent connections",
      "99.9% message delivery success rate",
    ],
    architecture: {
      description:
        "Event-driven architecture with Socket.io server handling WebSocket connections, Next.js API routes for REST endpoints, PostgreSQL for message persistence, and Redis for presence tracking.",
      diagram: "",
    },
    apiDocs: [
      {
        endpoint: "/api/messages",
        method: "GET",
        description: "Retrieve message history for a conversation",
        response: `{
  "messages": [
    {
      "id": "msg_123",
      "senderId": "user_456",
      "content": "Hello!",
      "timestamp": "2025-01-15T10:30:00Z",
      "read": true
    }
  ],
  "hasMore": false
}`,
      },
    ],
    codeSnippet: {
      title: "Socket.io Event Handler",
      language: "typescript",
      code: `io.on('connection', (socket: Socket) => {
  const userId = socket.handshake.auth.userId;

  // Join user's personal room
  socket.join(\`user:\${userId}\`);

  // Handle new messages
  socket.on('message:send', async (data) => {
    const message = await saveMessage({
      senderId: userId,
      recipientId: data.recipientId,
      content: data.content,
    });

    // Emit to recipient
    io.to(\`user:\${data.recipientId}\`).emit('message:new', message);

    // Confirm to sender
    socket.emit('message:sent', message);
  });

  // Handle typing indicators
  socket.on('typing:start', (recipientId) => {
    io.to(\`user:\${recipientId}\`).emit('typing:user', userId);
  });

  socket.on('disconnect', () => {
    // Update user status
    updateUserStatus(userId, 'offline');
  });
});`,
    },
    performance: [
      { metric: "Message Latency", value: "< 100ms" },
      { metric: "Concurrent Connections", value: "500+" },
      { metric: "Message Throughput", value: "1000 msg/s" },
      { metric: "Uptime", value: "99.9%" },
    ],
    testing: {
      coverage: "80%",
      types: ["Unit Tests", "Integration Tests", "Load Tests"],
    },
    link: "https://github.com/Abdallemo/real-time-Chat_nextjs_socketio",
    category: "Real-Time App",
    year: "2024",
    role: "Full-Stack Developer",
    images: {
      hero: "/modern-chat-app.png",
      gallery: [],
    },
  },
  {
    slug: "uthm-week-tracker",
    title: "UTHM Week Tracker",
    description:
      "Simple web utility to track university weeks - now used by classmates",
    longDescription:
      "A lightweight web utility designed to help UTHM students track academic weeks throughout the semester. What started as a personal tool has grown into a widely-used resource among classmates. The application calculates the current academic week based on the university calendar, helping students stay organized and plan their coursework effectively. Its simplicity and reliability have made it an essential tool for the student community.",
    tech: ["JavaScript", "HTML", "CSS", "Web APIs", "LocalStorage"],
    features: [
      "Automatic week calculation based on academic calendar",
      "Clean and intuitive interface",
      "Offline functionality with LocalStorage",
      "Mobile-responsive design",
      "Zero dependencies for fast loading",
    ],
    challenges: [
      "Accurately calculating weeks across semester breaks",
      "Ensuring reliability without a backend",
      "Creating an intuitive UX with minimal UI",
    ],
    outcomes: [
      "Used by 100+ students daily",
      "Featured in student WhatsApp groups",
      "Zero downtime since launch",
    ],
    codeSnippet: {
      title: "Week Calculation Logic",
      language: "javascript",
      code: `function calculateCurrentWeek() {
  const semesterStart = new Date('2024-09-01');
  const today = new Date();

  // Calculate days difference
  const diffTime = Math.abs(today - semesterStart);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Calculate week number (accounting for breaks)
  const breaks = [
    { start: new Date('2024-10-15'), end: new Date('2024-10-22') },
    { start: new Date('2024-12-20'), end: new Date('2025-01-05') }
  ];

  let breakDays = 0;
  breaks.forEach(breakPeriod => {
    if (today > breakPeriod.start) {
      const breakEnd = today < breakPeriod.end ? today : breakPeriod.end;
      breakDays += Math.ceil((breakEnd - breakPeriod.start) / (1000 * 60 * 60 * 24));
    }
  });

  const weekNumber = Math.ceil((diffDays - breakDays) / 7);
  return weekNumber;
}`,
    },
    performance: [
      { metric: "Load Time", value: "< 100ms" },
      { metric: "Bundle Size", value: "< 10KB" },
      { metric: "Lighthouse Score", value: "100/100" },
    ],
    link: "https://github.com/Abdallemo/uthm_which-week",
    category: "Utility",
    year: "2023",
    role: "Creator & Maintainer",
    images: {
      hero: "/uthmwhichweek.png",
      gallery: [
        "/week-display-with-current-date.jpg",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  },
  {
    slug: "delivery-app",
    title: "DoorDash-Style Delivery App",
    description: "Flutter-based food delivery with real-time tracking",
    longDescription:
      "A mobile food delivery application inspired by DoorDash, built with Flutter for cross-platform compatibility. The app features smooth animations, real-time order tracking, and a seamless user experience. It demonstrates mobile development expertise, including state management, API integration, and creating polished UI/UX. The backend is powered by Firebase, providing real-time database updates and authentication.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "Provider"],
    features: [
      "Smooth page transitions and animations",
      "Real-time order tracking with maps",
      "Firebase authentication and database",
      "Restaurant browsing and search",
      "Cart management and checkout flow",
      "Order history and favorites",
    ],
    challenges: [
      "Implementing smooth animations without performance issues",
      "Integrating real-time location tracking",
      "Managing complex state across multiple screens",
    ],
    outcomes: [
      "60fps animations on mid-range devices",
      "Sub-second real-time updates",
      "Positive feedback on UI/UX design",
    ],
    codeSnippet: {
      title: "Real-time Location Tracking",
      language: "dart",
      code: `class DeliveryTracker extends StatefulWidget {
  @override
  _DeliveryTrackerState createState() => _DeliveryTrackerState();
}

class _DeliveryTrackerState extends State<DeliveryTracker> {
  GoogleMapController? _mapController;
  StreamSubscription<Position>? _positionStream;

  @override
  void initState() {
    super.initState();
    _startTracking();
  }

  void _startTracking() {
    _positionStream = Geolocator.getPositionStream(
      locationSettings: LocationSettings(
        accuracy: LocationAccuracy.high,
        distanceFilter: 10,
      ),
    ).listen((Position position) {
      _updateDriverLocation(position);
    });
  }

  void _updateDriverLocation(Position position) {
    final latLng = LatLng(position.latitude, position.longitude);
    _mapController?.animateCamera(
      CameraUpdate.newLatLng(latLng),
    );

    // Update Firebase with new location
    FirebaseDatabase.instance
      .ref('deliveries/\${widget.orderId}/location')
      .set({
        'lat': position.latitude,
        'lng': position.longitude,
        'timestamp': ServerValue.timestamp,
      });
  }
}`,
    },
    performance: [
      { metric: "Frame Rate", value: "60 FPS" },
      { metric: "App Size", value: "< 20MB" },
      { metric: "Location Update", value: "< 1s" },
    ],
    link: "https://github.com/Abdallemo/delivery_app",
    category: "Mobile App",
    year: "2024",
    role: "Mobile Developer",
    images: {
      hero: "/placeholder.svg?height=600&width=1200",
      gallery: [],
    },
    videos: {
      hero: "/Delivery Appdemo.mp4",
    },
  },
  {
    slug: "go-route-gen",
    title: "go-route-gen",
    description: "End-to-end type-safe routing for Go 1.22+ and TypeScript",
    longDescription: "A CLI tool that uses Go's AST to scrape net/http routes and generate TypeScript definitions for type-safe API communication.",
    tech: ["Go", "TypeScript", "AST"],
    features: [
      "Go AST parsing",
      "Type-safe route generation",
      "TS client integration",
      "Support for path parameters"
    ],
    link: "https://github.com/Abdallemo/go-route-gen",
    category: "Developer Tool",
    year: "2024",
    role: "Developer",
    images: {
      hero: "/placeholder.svg?height=600&width=1200",
      gallery: [],
    },
  },
  {
    slug: "routegen-client",
    title: "@abdallemo/routegen-client",
    description: "Strictly-typed Axios wrapper for go-route-gen routes",
    longDescription: "The frontend counterpart to go-route-gen, providing a type-safe Axios wrapper that enforces route and parameter safety at compile time.",
    tech: ["TypeScript", "Axios", "Generics"],
    features: [
      "Template literal types",
      "Path parameter safety",
      "Strictly-typed Axios wrapper",
      "NPM package"
    ],
    link: "https://github.com/Abdallemo/go-route-gen",
    category: "Frontend Library",
    year: "2024",
    role: "Developer",
    images: {
      hero: "/placeholder.svg?height=600&width=1200",
      gallery: [],
    },
  },
];
