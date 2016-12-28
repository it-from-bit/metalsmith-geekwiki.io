---
title: "Writing your first AWS CloudFormation Template"
layout: "articles/article-page.pug"
summary: "Writing your first AWS CloudFormation Template"
featured_image: "assets/articles/aws-cloudformation.png"
create_date: "01-04-2016"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags:
share:
  title: "Writing your first AWS CloudFormation Template"
  summary: "Writing your first AWS CloudFormation Template"
  href: "###writing-your-first-cloudformation-script###"
---
When starting out in AWS, and trying to understand everything about CloudFormation, I admit, I struggled a little bit. All of the different types of things that you can do in CloudFormation was both amazing and frightening at the same time. However, after using it for quite awhile now I figured I would guide others through creating their very first template.

For those who don't know what CloudFormation is, it's a service that will give you an easy way to create and manage AWS resources and provide a way to update them in a orderly and predictable fashion. Basically, what this means is it's a way for your to basically write a template that you can run against AWS to provision your entire environment as you need.

The reason I really enjoy using CloudFormation, is because it allows me to create the exact same set of ec2 instances, security groups, load balancers, etc. in the exact same way every single time. That means that when I go to create a Stage or Production version of a dev environment I created, I can do so quickly and easily.

In this example, we're going to create an EC2 instance with a load balancer in front of it (Yes, you don't need a load balancer in front of a single node typically, I just wanted to show you an example of how to create a load balancer and put EC2 instances behind it). So to get us started, there are a few terms and information you should know before hand so you understand. The first thing to know, is that all a CloudFormation Template is, is a JSON-formatted text file that describes your AWS infrastructure. There are also a lot of other sections inside a CloudFormation template that you can use. Let's list them out and give them a brief description of what they are.
*   **AWSTemplateFormatVersion** -  (OPTIONAL) Specifies the AWS CloudFormation template version that the template conforms to. The template format version is not the same as the API or WSDL version. The template format version can change independently of the API and WSDL versions.
*   **Description** - (OPTIONAL) A text string that describes the template. This section must always follow the template format version section.
*   **Metadata** - (OPTIONAL) JSON objects that provide additional information about the template.
*   **Parameters** - (OPTIONAL) Specifies values that you can pass in to your template at runtime (when you create or update a stack). You can refer to parameters in the Resources and Outputs sections of the template.
*   **Mappings** - (OPTIONAL) A mapping of keys and associated values that you can use to specify conditional parameter values, similar to a lookup table. You can match a key to a corresponding value by using the Fn::FindInMap intrinsic function in the Resources and Outputs section.
*   **Conditions** - (OPTIONAL) Defines conditions that control whether certain resources are created or whether certain resource properties are assigned a value during stack creation or update. For example, you could conditionally create a resource that depends on whether the stack is for a production or test environment.
*   **Resources** - <span style="color: #ff0000;">(REQUIRED)</span> Specifies the stack resources and their properties, such as an Amazon Elastic Compute Cloud instance or an Amazon Simple Storage Service bucket. You can refer to resources in theResources and Outputs sections of the template.
*   **Outputs** - (OPTIONAL) Describes the values that are returned whenever you view your stack's properties. For example, you can declare an output for an Amazon S3 bucket name and then call the aws cloudformation describe-stacks AWS CLI command to view the name.

Don't let all of the above scare you, as you can see by reading through all of them, the only one that is actually needed and is required is the Resources section and that's really the meat of this whole thing. So let's get started with our template, we'll skip past all of the optional sections and only work on the resources section in this example. So let's get started.

The first thing that we want to do, is create the base of our CloudFormation template with the opening and closing brackets and the Resources section like we need, and it should look like this:

```json
{
  "Resources" : {
  }
}
```

Now that we have the base of our template, we will want to start off by creating two EC2 instances. In order to create an EC2 instance, we need to create a Security Group so our ports that we need are open. So to do that we would use the AWS::EC2::SecurityGroup type and specify the Ingress options of the instances. So your template should look like this:

```json
{
  "Resources" : {
    "InstanceSecurityGroup" : {
      "Type" : "AWS::EC2::SecurityGroup",
      "Properties" : {
        "GroupDescription" : "Enable SSH access via port 22",
        "SecurityGroupIngress" : [
          { "IpProtocol" : "tcp", "FromPort" : "22", "ToPort" : "22", "CidrIp" : "0.0.0.0/0" },
          { "IpProtocol" : "tcp", "FromPort" : "80", "ToPort" : "80", "CidrIp" : "0.0.0.0/0" }
        ]
      }
    }
  }
}
```

So, let's go through and understand what we did above. The first is as mentioned above we need to declare the type which in this case is AWS::EC2::SecurityGroup. Then we pass in a Properties section for the type and give it a description and then specify the SecurityGroupIngress rules. In the example above, for the Ingress rules we are opening port 22 (SSH) and port 80 (HTTP) for the entire world. Typically you would want to lock down SSH to a particular IP address or IP address range for security, but because this is just an example we'll keep it open.

Now that we have our Security Group, we can create some EC2 Instances and use the above security group. To do this we will use the AWS::EC2::Instance type (I'm sure you guessed that one!) and we'll reference the SG created above. So your template should look something like this:

```json
{
  "Resources" : {
    "Ec2Instance" : {
      "Type" : "AWS::EC2::Instance",
      "Properties" : {
        "SecurityGroups" : [ { "Ref" : "InstanceSecurityGroup" } ],
        "KeyName" : "mykey",
        "ImageId" : "ami-7a11e213"
      }
    },

    "InstanceSecurityGroup" : {
      "Type" : "AWS::EC2::SecurityGroup",
      "Properties" : {
        "GroupDescription" : "Enable SSH access via port 22",
        "SecurityGroupIngress" : [
          { "IpProtocol" : "tcp", "FromPort" : "22", "ToPort" : "22", "CidrIp" : "0.0.0.0/0" },
          { "IpProtocol" : "tcp", "FromPort" : "80", "ToPort" : "80", "CidrIp" : "0.0.0.0/0" }
        ]
      }
    }
  }
}
```

Now let's understand what we just did. We used the type mentioned above AWS::EC2::Instance and passed in properties for the type. In the properties we referenced the security group we created earlier by using the { "Ref" : "" } function, this is how you can reference other resources that you have created in the template and we passed in "mykey" ssh key. Please note, you will need to create an SSH key before hand for this example, to create the SSH key read [this document](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-create-keypair.html). We also are specifying an AMI (Amazon Machine Image) ID to use for the EC2 instance. Pretty neat, huh?

Now, the next thing we need to do is create a load balancer and reference the EC2 instance that was created. So your template should look like this now:

```json
{
  "Resources" : {
    "Ec2Instance" : {
      "Type" : "AWS::EC2::Instance",
      "Properties" : {
        "SecurityGroups" : [ { "Ref" : "InstanceSecurityGroup" } ],
        "KeyName" : "mykey",
        "ImageId" : "ami-7a11e213"
      }
    },

    "InstanceSecurityGroup" : {
      "Type" : "AWS::EC2::SecurityGroup",
      "Properties" : {
        "GroupDescription" : "Enable SSH access via port 22",
        "SecurityGroupIngress" : [
          { "IpProtocol" : "tcp", "FromPort" : "22", "ToPort" : "22", "CidrIp" : "0.0.0.0/0" },
          { "IpProtocol" : "tcp", "FromPort" : "80", "ToPort" : "80", "CidrIp" : "0.0.0.0/0" }
        ]
      }
    },

    "ElasticLoadBalancer" : {
      "Type" : "AWS::ElasticLoadBalancing::LoadBalancer",
      "Properties" : {
        "AvailabilityZones" : { "Fn::GetAZs" : "" },
        "Instances" : [ { "Ref" : "Ec2Instance" } ],
        "Listeners" : [ {
          "LoadBalancerPort" : "80",
          "InstancePort" : "80",
          "Protocol" : "HTTP"
        } ],
        "HealthCheck" : {
          "Target" : { "Fn::Join" : [ "", ["HTTP:", "80", "/"]]},
          "HealthyThreshold" : "3",
          "UnhealthyThreshold" : "5",
          "Interval" : "30",
          "Timeout" : "5"
        }
      }
    }
  }
}
```

As you can see, the load balancer type that was used was AWS::ElasticLoadBalancing::LoadBalancer, and it needs quite a bit more properties values for it to work. The first thing is the load balancer needs to know what availability zones to use, in this example we'll use the Fn::GetAZs which will automatically populate the availability zones based on the region you are in. Then we reference the Ec2Instance, configured which load balancer port and instance port to use and what protocol. After that we needed to specify a Health Check so the load balancer knows when the EC2 instance is up or down.

Phew. That seems like a lot, but once you start to understand it, it becomes second nature and you'll find yourself writing this in your sleep. Now that we have our template created, we can finally run it against AWS. To do this you will need to log into the [AWS Console](https://aws.amazon.com/console/).

Once you're logged in, you will want to navigate over to CloudFormation and click on "Create a Stack". In this section you'll also see the new Design template option which you can use to visually create the CloudFormation template that you just created. However, I always feel like it's best to know the manual way of doing it because when you can manually do it, you can find ways to automate it.. But that's really a personal preference. So, click on "Create New Stack" button that looks like this:

![create stack](/assets/articles/create-stack.png)

Then click on "Upload a template to Amazon S3" and then click on "Choose File" and navigate and select where you saved your template on your computer.

![upload template](/assets/articles/upload-template.png)

Then click on Next. On the next screen simply type in what you want to name the Stack, and click next.

![stack name](/assets/articles/stack-name.png)

Then you can specify any tags you want to use, and when done click next.

![stack options](/assets/articles/stack-options.png)

Then you'll come to a review screen and simply review all of the information you put in to ensure it's correct and then click Create and watch your EC2 instance come up with a load balancer in front of it.

And you're done! Let me know if you run into any issues or have any questions. I'll be writing a follow up post to this to start using some of the other sections and using a parameters file.
