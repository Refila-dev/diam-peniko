import { notFoundError } from "@/lib/util/error";
import { prisma } from "../..";

export function getAllVisitors() {
    const visitors = prisma.visitors.findMany();
    if(!visitors) {
        throw notFoundError("No visitors found");
    }
    return visitors;
}