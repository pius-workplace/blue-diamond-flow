import React from "react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "John Smith",
    role: "Master Plumber",
    image: "/src/assets/team-1.jpg",
    bio: "30+ years experience in residential and commercial plumbing.",
  },
  {
    name: "Sarah Johnson",
    role: "Service Manager",
    image: "/src/assets/team-2.jpg", 
    bio: "Coordinates our 24/7 emergency response team.",
  },
  {
    name: "Mike Davis",
    role: "Lead Technician",
    image: "/src/assets/team-3.jpg",
    bio: "Specializes in water heater installation and repair.",
  },
  {
    name: "Lisa Chen",
    role: "Customer Service Lead",
    image: "/src/assets/team-4.jpg",
    bio: "Handles scheduling and ensures 5-star customer experience.",
  },
];

const TeamSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-main">
      <AnimateOnScroll>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-muted-foreground text-lg">
            Licensed professionals dedicated to solving your plumbing problems
          </p>
        </div>
      </AnimateOnScroll>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <StaggerItem key={member.name} >

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-24 h-24 mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={member.image} />
                    <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default TeamSection;

