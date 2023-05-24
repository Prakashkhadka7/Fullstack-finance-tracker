import { Request, Response } from 'express';
import { JobType } from '../models/jobtype';

export class JobTypeController {
  public static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const jobTypes = await JobType.findAll();
      res.status(200).json(jobTypes);
    } catch (error) {
      console.error('Error getting job types:', error);
      res.status(500).json({ error: 'Failed to get job types' });
    }
  }

  public static async getById(req: Request, res: Response): Promise<void> {
    const { jobTypeId } = req.params;

    try {
      const jobType = await JobType.findByPk(jobTypeId);
      if (jobType) {
        res.status(200).json(jobType);
      } else {
        res.status(404).json({ error: 'Job type not found' });
      }
    } catch (error) {
      console.error('Error getting job type:', error);
      res.status(500).json({ error: 'Failed to get job type' });
    }
  }

  public static async create(req: Request, res: Response): Promise<void> {
    const { type } = req.body;
    console.log('req.bodyreq.bodyreq.bodyreq.bodyreq.body');

    try {
      const jobType = await JobType.create({ type });
      res.status(201).json(jobType);
    } catch (error) {
      console.error('Error creating job type:', error);
      res.status(500).json({ error: 'Failed to create job type' });
    }
  }

  public static async update(req: Request, res: Response): Promise<void> {
    const { jobTypeId } = req.params;
    const { type } = req.body;

    try {
      const jobType = await JobType.findByPk(jobTypeId);
      if (jobType) {
        jobType.type = type;
        await jobType.save();
        res.status(200).json(jobType);
      } else {
        res.status(404).json({ error: 'Job type not found' });
      }
    } catch (error) {
      console.error('Error updating job type:', error);
      res.status(500).json({ error: 'Failed to update job type' });
    }
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    const { jobTypeId } = req.params;

    try {
      const jobType = await JobType.findByPk(jobTypeId);
      if (jobType) {
        await jobType.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Job type not found' });
      }
    } catch (error) {
      console.error('Error deleting job type:', error);
      res.status(500).json({ error: 'Failed to delete job type' });
    }
  }
}
